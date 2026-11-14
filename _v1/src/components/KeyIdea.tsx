import { toggleHighlight, useIsHighlighted } from '../lib/useNotes';

/** One paraphrased idea. The button saves it as a highlight, which paints it with the marker. */
export function KeyIdea({ itemKey, text }: { itemKey: string; text: string }) {
  const on = useIsHighlighted(itemKey);

  return (
    <li className="idea" data-on={on || undefined}>
      <p>
        <span className="marker">{text}</span>
      </p>
      <button type="button" className="button button-quiet" aria-pressed={on} onClick={() => toggleHighlight(itemKey)}>
        {on ? 'Highlighted' : 'Highlight'}
      </button>
    </li>
  );
}
