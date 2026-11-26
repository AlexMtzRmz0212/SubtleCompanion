import type { Visual } from '../../data/types';

/** A drawing with its caption. Its id is the visual's id, so a link or the notes panel can find it. */
export function Figure({ visual, main }: { visual: Visual; main?: boolean }) {
  const { Component } = visual;
  return (
    <figure id={visual.id} data-visual={visual.id} className={main ? 'figure figure-main' : 'figure'}>
      <Component name={visual.name} alt={visual.alt} />
      <figcaption className="figure-foot">
        <p>{visual.caption}</p>
      </figcaption>
    </figure>
  );
}
