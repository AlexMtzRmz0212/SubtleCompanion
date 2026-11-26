import { useEffect, useRef, useState } from 'react';
import { chapterById, chapters, visualById } from '../data/chapters';
import type { Chapter } from '../data/types';
import { useActiveVisual } from '../lib/useActiveVisual';
import { goTo, type Route } from '../lib/useHashRoute';
import { GENERAL, addNote, deleteNote, editNote, setNotesOpen, useNotes, useNotesOpen, type Note } from '../lib/useNotes';

/** Every section a note can belong to, in book order: General, then each chapter followed by its drawings. */
const SECTION_ORDER: string[] = [GENERAL, ...chapters.flatMap((c) => [c.id as string, ...c.visuals.map((v) => v.id)])];

const chapterLabel = (c: Chapter) => `${c.n}. ${c.title}`;

/** Where a section sits in the book: the chapter, then the part of it. */
function describe(section: string): { chapter: string; part: string } {
  if (section === GENERAL) return { chapter: 'The whole book', part: 'General' };
  const chapter = chapterById.get(section);
  if (chapter) return { chapter: chapterLabel(chapter), part: 'Whole chapter' };
  const found = visualById.get(section);
  return found
    ? { chapter: chapterLabel(found.chapter), part: found.visual.name }
    : { chapter: '', part: 'Unknown section' };
}

const formatDate = (iso: string) => new Date(iso).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });

function NoteItem({ note }: { note: Note }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(note.text);

  if (editing) {
    return (
      <li className="note">
        <textarea
          aria-label="Edit note"
          rows={4}
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <div className="note-actions">
          <button
            type="button"
            className="note-btn"
            disabled={!draft.trim()}
            onClick={() => {
              editNote(note.id, draft.trim());
              setEditing(false);
            }}
          >
            Update
          </button>
          <button
            type="button"
            className="note-btn"
            onClick={() => {
              setDraft(note.text);
              setEditing(false);
            }}
          >
            Cancel
          </button>
        </div>
      </li>
    );
  }

  return (
    <li className="note">
      <p className="note-text">{note.text}</p>
      <div className="note-foot">
        <time dateTime={note.createdAt}>{formatDate(note.createdAt)}</time>
        <div className="note-actions">
          <button type="button" className="note-btn" onClick={() => setEditing(true)}>
            Edit
          </button>
          <button
            type="button"
            className="note-btn"
            onClick={() => {
              if (window.confirm('Delete this note?')) deleteNote(note.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

/**
 * The owner's notes, in a panel on the right edge that collapses to a tab. The panel follows what
 * is on screen: home is General, a chapter page is the drawing in the middle of the screen (or the
 * whole chapter). Sections that have notes elsewhere are listed below and jump to their place.
 */
export function NotesPanel({ route }: { route: Route }) {
  const open = useNotesOpen();
  const notes = useNotes();
  const chapter = route.view === 'chapter' ? route.chapter : null;
  const activeId = useActiveVisual(chapter?.id ?? null);
  // The chapter whose own notes are showing instead of a drawing's. Any other chapter starts on its drawings.
  const [chapterMode, setChapterMode] = useState<string | null>(null);
  const [draft, setDraft] = useState('');
  const tabRef = useRef<HTMLButtonElement>(null);
  const collapseRef = useRef<HTMLButtonElement>(null);
  const firstRender = useRef(true);
  const wholeChapter = chapter !== null && chapterMode === chapter.id;

  // The drawing in view, if it belongs to this chapter (it can lag one render behind a page change).
  const visual = chapter?.visuals.find((v) => v.id === activeId);
  const canPick = chapter !== null && chapter.visuals.length > 0;
  const target = !chapter ? GENERAL : wholeChapter || !visual ? chapter.id : visual.id;
  const { chapter: eyebrow, part } = describe(target);

  // Mark the drawing the notes are about.
  useEffect(() => {
    if (!open || target === GENERAL) return;
    const el = document.getElementById(target);
    el?.setAttribute('data-notes-target', '');
    return () => el?.removeAttribute('data-notes-target');
  }, [open, target]);

  // Keyboard focus follows the panel as it opens and closes.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    (open ? collapseRef : tabRef).current?.focus();
  }, [open]);

  const counts = new Map<string, number>();
  for (const n of notes) counts.set(n.section, (counts.get(n.section) ?? 0) + 1);
  const here = notes.filter((n) => n.section === target).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const elsewhere = SECTION_ORDER.filter((s) => s !== target && counts.has(s));

  return (
    <>
      <button
        ref={tabRef}
        type="button"
        className="notes-tab"
        hidden={open}
        aria-expanded={open}
        aria-controls="notes-panel"
        onClick={() => setNotesOpen(true)}
      >
        Notes
      </button>
      <aside id="notes-panel" className="notes" aria-label="Notes" inert={!open}>
        <div className="notes-head">
          <h2>Notes</h2>
          <button
            ref={collapseRef}
            type="button"
            className="note-btn"
            aria-expanded={open}
            aria-controls="notes-panel"
            onClick={() => setNotesOpen(false)}
          >
            Collapse
          </button>
        </div>

        <div className="notes-body">
          <div className="notes-context">
            <p className="notes-eyebrow">{eyebrow}</p>
            <h3 className="notes-part">{part}</h3>
            {canPick ? (
              <div className="notes-scope" role="group" aria-label="Notes are about">
                <button
                  type="button"
                  className="note-btn"
                  aria-pressed={!wholeChapter}
                  onClick={() => setChapterMode(null)}
                >
                  This drawing
                </button>
                <button
                  type="button"
                  className="note-btn"
                  aria-pressed={wholeChapter}
                  onClick={() => setChapterMode(chapter.id)}
                >
                  Whole chapter
                </button>
              </div>
            ) : null}
          </div>

          <form
            className="notes-field"
            onSubmit={(e) => {
              e.preventDefault();
              const text = draft.trim();
              if (!text) return;
              addNote(target, text);
              setDraft('');
            }}
          >
            <label htmlFor="note-draft">New note on {part}</label>
            <textarea
              id="note-draft"
              rows={4}
              placeholder="Write a note"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) e.currentTarget.form?.requestSubmit();
              }}
            />
            <button type="submit" className="button button-accent" disabled={!draft.trim()}>
              Add note
            </button>
          </form>

          {here.length === 0 ? (
            <p className="notes-empty">No notes here yet.</p>
          ) : (
            <ul className="notes-list">
              {here.map((note) => (
                <NoteItem key={note.id} note={note} />
              ))}
            </ul>
          )}

          {elsewhere.length > 0 ? (
            <section aria-labelledby="notes-elsewhere">
              <h3 id="notes-elsewhere" className="notes-sub">
                Notes elsewhere
              </h3>
              <ul className="notes-index">
                {elsewhere.map((s) => {
                  const where = describe(s);
                  return (
                    <li key={s}>
                      <button
                        type="button"
                        className="notes-jump"
                        onClick={() => {
                          setChapterMode(chapterById.has(s) ? s : null);
                          goTo(s === GENERAL ? '' : s);
                        }}
                      >
                        <span>
                          <small>{where.chapter}</small>
                          {where.part}
                        </span>
                        <span className="notes-count">{counts.get(s)}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          ) : null}
        </div>
      </aside>
    </>
  );
}
