import { useRef, useState } from 'react';
import { chapters } from '../data/chapters';
import { downloadBackup, entriesFor, isEmpty, notesAsText, parseBackup, restoreBackup, type Backup } from '../lib/backup';
import { toggleHighlight, useAllNotes, useHighlights } from '../lib/useNotes';

function Tools({ text, hasContent }: { text: string; hasContent: boolean }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');
  const [pending, setPending] = useState<Backup | null>(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage('Copied. Paste it anywhere.');
    } catch {
      setMessage('Copying is blocked in this browser. Download a backup instead.');
    }
  };

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    const backup = parseBackup(await file.text());
    if (!backup) {
      setMessage('That file is not a backup from this app. Choose a file you downloaded here.');
    } else if (hasContent) {
      setPending(backup);
      setMessage('');
    } else {
      restoreBackup(backup);
      setMessage('Backup restored.');
    }
  };

  return (
    <div className="tools">
      <div className="tools-row">
        <button type="button" className="button button-ink" onClick={copy} disabled={!hasContent}>
          Copy as text
        </button>
        <button
          type="button"
          className="button button-quiet"
          onClick={() => {
            downloadBackup();
            setMessage('Backup downloaded.');
          }}
        >
          Download backup
        </button>
        <button type="button" className="button button-quiet" onClick={() => fileRef.current?.click()}>
          Restore from backup
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          hidden
          onChange={(e) => {
            void onFile(e.target.files?.[0]);
            e.target.value = '';
          }}
        />
      </div>
      {pending ? (
        <div className="confirm" role="alert">
          <p>Restoring replaces the notes, highlights and progress in this browser. This cannot be undone.</p>
          <div className="tools-row">
            <button
              type="button"
              className="button button-accent"
              onClick={() => {
                restoreBackup(pending);
                setPending(null);
                setMessage('Backup restored.');
              }}
            >
              Replace my notes
            </button>
            <button type="button" className="button button-quiet" onClick={() => setPending(null)}>
              Keep current notes
            </button>
          </div>
        </div>
      ) : null}
      <p className="tools-message" role="status">
        {message}
      </p>
    </div>
  );
}

export function NotesView() {
  const notes = useAllNotes();
  const highlights = useHighlights();
  const sections = chapters.map((chapter, i) => ({ chapter, entries: entriesFor(i, notes, highlights) }));
  const filled = sections.filter((s) => !isEmpty(s.entries));

  return (
    <div className="chapter wrap">
      <header className="chapter-head">
        <h1>My notes</h1>
        <p className="lede">Everything you highlighted and wrote, in book order. It is saved in this browser only.</p>
        <Tools text={notesAsText(notes, highlights)} hasContent={filled.length > 0} />
      </header>

      <div className="chapter-body">
        {filled.length === 0 ? (
          <section className="empty">
            <h2>Nothing here yet</h2>
            <p className="prose">
              Open a chapter, highlight an idea or write a note, and it shows up on this page.
            </p>
            <a className="button button-accent" href={`#${chapters[0].id}`}>
              Open chapter 1
            </a>
          </section>
        ) : (
          filled.map(({ chapter, entries }) => (
            <section key={chapter.id} aria-labelledby={`notes-${chapter.id}`}>
              <h2 id={`notes-${chapter.id}`}>
                <a href={`#${chapter.id}`}>
                  {chapter.n}. {chapter.title}
                </a>
              </h2>
              {entries.highlights.length ? (
                <ul className="ideas">
                  {entries.highlights.map((h) => (
                    <li key={h.key} className="idea" data-on>
                      <p>
                        <span className="marker">{h.text}</span>
                      </p>
                      <button type="button" className="button button-quiet" onClick={() => toggleHighlight(h.key)}>
                        Remove<span className="visually-hidden"> highlight</span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
              {entries.answers.map((a) => (
                <div key={a.question} className="answer">
                  <h3>{a.question}</h3>
                  <p className="prose written">{a.text}</p>
                </div>
              ))}
              {entries.note ? (
                <div className="answer">
                  <h3>Notes</h3>
                  <p className="prose written">{entries.note}</p>
                </div>
              ) : null}
            </section>
          ))
        )}
      </div>
    </div>
  );
}
