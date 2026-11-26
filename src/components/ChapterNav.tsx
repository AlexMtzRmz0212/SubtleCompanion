import { chapters } from '../data/chapters';
import type { Chapter } from '../data/types';

function stateOf(chapter: Chapter) {
  return chapter.visuals.length === 0 ? 'Not drawn yet' : `${chapter.visuals.length} visuals`;
}

/** The table of contents: every chapter as one large link. */
export function ChapterNav() {
  return (
    <ol className="chapter-list">
      {chapters.map((c) => (
        <li key={c.id}>
          <a className="chapter-row" href={`#${c.id}`}>
            <span className="chapter-row-n">{c.n}</span>
            <span className="chapter-row-title">{c.title}</span>
            <span className="chapter-row-line">{c.oneLiner}</span>
            <span className="chapter-row-state">{stateOf(c)}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}
