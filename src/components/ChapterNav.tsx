import { chapters } from '../data/chapters';
import type { Chapter } from '../data/types';
import { useReadIds } from '../lib/useProgress';

function stateOf(chapter: Chapter, seen: boolean) {
  if (chapter.visuals.length === 0) return 'Not drawn yet';
  return seen ? 'Seen' : `${chapter.visuals.length} visuals`;
}

/** The table of contents: every chapter as one large link. */
export function ChapterNav() {
  const readIds = useReadIds();

  return (
    <ol className="chapter-list">
      {chapters.map((c) => (
        <li key={c.id}>
          <a className="chapter-row" href={`#${c.id}`}>
            <span className="chapter-row-n">{c.n}</span>
            <span className="chapter-row-title">{c.title}</span>
            <span className="chapter-row-line">{c.oneLiner}</span>
            <span className="chapter-row-state">{stateOf(c, readIds.includes(c.id))}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}
