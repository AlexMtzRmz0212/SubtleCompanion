import { chapters } from '../data/chapters';
import { useReadIds } from '../lib/useProgress';

/** One block per chapter, in book order. A block fills in when its chapter is marked as seen. */
export function ProgressBar() {
  const readIds = useReadIds();
  const read = chapters.filter((c) => readIds.includes(c.id)).length;

  return (
    <div className="progress">
      <div className="progress-blocks" aria-hidden="true">
        {chapters.map((c) => (
          <span key={c.id} data-read={readIds.includes(c.id) || undefined} />
        ))}
      </div>
      <p className="progress-count">
        <strong>
          {read} of {chapters.length}
        </strong>{' '}
        chapters seen
      </p>
    </div>
  );
}
