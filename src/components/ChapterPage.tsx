import { chapters } from '../data/chapters';
import type { Chapter } from '../data/types';
import { setRead, useIsRead } from '../lib/useProgress';
import { Figure } from '../visuals/kit/Figure';

function SeenToggle({ chapterId }: { chapterId: string }) {
  const seen = useIsRead(chapterId);
  return seen ? (
    <button type="button" className="button button-quiet" onClick={() => setRead(chapterId, false)}>
      Seen. Undo
    </button>
  ) : (
    <button type="button" className="button button-accent" onClick={() => setRead(chapterId, true)}>
      Mark as seen
    </button>
  );
}

function Pager({ chapter }: { chapter: Chapter }) {
  const i = chapters.findIndex((c) => c.id === chapter.id);
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
        <a href="#saved">
          <span>You reached the end</span>
          <strong>See your saved visuals</strong>
        </a>
      )}
    </nav>
  );
}

export function ChapterPage({ chapter }: { chapter: Chapter }) {
  const [main, ...rest] = chapter.visuals;

  return (
    <article className="chapter wrap">
      <header className="chapter-head">
        <p className="numeral">
          <span className="visually-hidden">Chapter </span>
          {chapter.n}
        </p>
        <div className="chapter-title">
          <h1>{chapter.title}</h1>
          <p className="lede">{chapter.oneLiner}</p>
        </div>
        {main ? <SeenToggle chapterId={chapter.id} /> : null}
      </header>

      {main ? (
        <>
          <Figure visual={main} main />
          <div className="figures">
            {rest.map((visual) => (
              <Figure key={visual.id} visual={visual} />
            ))}
          </div>
        </>
      ) : (
        <div className="empty">
          <h2>Not drawn yet</h2>
          <p>This chapter's visuals come next. Chapter 1 is ready.</p>
          <a className="button button-accent" href="#ch01">
            Open chapter 1
          </a>
        </div>
      )}

      <Pager chapter={chapter} />
    </article>
  );
}
