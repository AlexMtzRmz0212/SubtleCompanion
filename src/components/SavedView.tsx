import { allVisuals } from '../data/chapters';
import { useSavedIds } from '../lib/useSaved';
import { Figure } from '../visuals/kit/Figure';

/** The visuals marked with Save, in book order. */
export function SavedView() {
  const savedIds = useSavedIds();
  const saved = allVisuals.filter(({ visual }) => savedIds.includes(visual.id));

  return (
    <article className="chapter wrap">
      <header className="chapter-head">
        <div className="chapter-title">
          <h1>Saved</h1>
          <p className="lede">
            {saved.length === 0
              ? 'The visuals you save show up here.'
              : `${saved.length} ${saved.length === 1 ? 'visual' : 'visuals'}, in book order.`}
          </p>
        </div>
      </header>

      {saved.length === 0 ? (
        <div className="empty">
          <h2>Nothing saved yet</h2>
          <p>Press Save under any drawing to keep it here.</p>
          <a className="button button-accent" href="#ch01">
            Open chapter 1
          </a>
        </div>
      ) : (
        <div className="figures">
          {saved.map(({ visual, chapter }) => (
            <Figure key={visual.id} visual={visual}>
              <a className="figure-origin" href={`#${chapter.id}`}>
                Chapter {chapter.n}
              </a>
            </Figure>
          ))}
        </div>
      )}
    </article>
  );
}
