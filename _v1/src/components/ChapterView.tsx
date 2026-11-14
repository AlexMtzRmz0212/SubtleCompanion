import { chapters } from '../data/chapters';
import type { Chapter } from '../data/types';
import { itemKey } from '../lib/useNotes';
import { setRead, useIsRead } from '../lib/useProgress';
import { KeyIdea } from './KeyIdea';
import { NoteEditor, ReflectionPrompt } from './NoteEditor';

function ReadToggle({ chapterId }: { chapterId: string }) {
  const read = useIsRead(chapterId);
  return (
    <div className="read-toggle">
      {read ? (
        <>
          <p className="read-done">You have read this chapter.</p>
          <button type="button" className="button button-quiet" onClick={() => setRead(chapterId, false)}>
            Mark as unread
          </button>
        </>
      ) : (
        <button type="button" className="button button-accent" onClick={() => setRead(chapterId, true)}>
          Mark as read
        </button>
      )}
    </div>
  );
}

function Pager({ chapter }: { chapter: Chapter }) {
  const i = chapters.indexOf(chapter);
  const prev = chapters[i - 1];
  const next = chapters[i + 1];
  return (
    <nav className="pager" aria-label="Other chapters">
      {prev ? (
        <a href={`#${prev.id}`}>
          <span>Previous</span>
          <strong>
            {prev.n}. {prev.title}
          </strong>
        </a>
      ) : (
        <a href="#">
          <span>Back to</span>
          <strong>All chapters</strong>
        </a>
      )}
      {next ? (
        <a href={`#${next.id}`}>
          <span>Next</span>
          <strong>
            {next.n}. {next.title}
          </strong>
        </a>
      ) : (
        <a href="#notes">
          <span>You reached the end</span>
          <strong>See your notes</strong>
        </a>
      )}
    </nav>
  );
}

export function ChapterView({ chapter }: { chapter: Chapter }) {
  return (
    <article className="chapter wrap">
      <header className="chapter-head">
        <p className="numeral">
          <span className="visually-hidden">Chapter </span>
          {chapter.n}
        </p>
        <h1>{chapter.title}</h1>
        <p className="lede">{chapter.oneLiner}</p>
        <ReadToggle chapterId={chapter.id} />
      </header>

      <div className="chapter-body">
        <section aria-labelledby="summary-heading">
          <h2 id="summary-heading">In short</h2>
          {chapter.summary.map((paragraph) => (
            <p key={paragraph} className="prose">
              {paragraph}
            </p>
          ))}
        </section>

        <section aria-labelledby="ideas-heading">
          <h2 id="ideas-heading">Key ideas</h2>
          <ul className="ideas">
            {chapter.keyIdeas.map((text, i) => (
              <KeyIdea key={text} itemKey={itemKey(chapter.id, i)} text={text} />
            ))}
          </ul>
        </section>

        <section aria-labelledby="questions-heading">
          <h2 id="questions-heading">Ask yourself</h2>
          <div className="fields">
            {chapter.reflection.map((question, i) => (
              <ReflectionPrompt key={question} itemKey={itemKey(chapter.id, i)} question={question} />
            ))}
          </div>
        </section>

        <section aria-labelledby="notes-heading">
          <h2 id="notes-heading">Notes</h2>
          <NoteEditor chapterId={chapter.id} />
        </section>

        <Pager chapter={chapter} />
      </div>
    </article>
  );
}
