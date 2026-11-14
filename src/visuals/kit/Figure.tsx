import type { ReactNode } from 'react';
import type { Visual } from '../../data/types';
import { toggleSaved, useIsSaved } from '../../lib/useSaved';

function SaveButton({ visual }: { visual: Visual }) {
  const saved = useIsSaved(visual.id);
  return (
    <button type="button" className="save" data-saved={saved || undefined} onClick={() => toggleSaved(visual.id)}>
      {saved ? 'Saved' : 'Save'}
      <span className="visually-hidden">
        : {visual.name}. {saved ? 'Press to remove.' : ''}
      </span>
    </button>
  );
}

/** A drawing with its caption and Save button. `children` are extra tools shown beside Save. */
export function Figure({ visual, main, children }: { visual: Visual; main?: boolean; children?: ReactNode }) {
  const { Component } = visual;
  return (
    <figure className={main ? 'figure figure-main' : 'figure'}>
      <Component name={visual.name} alt={visual.alt} />
      <figcaption className="figure-foot">
        <p>{visual.caption}</p>
        <div className="figure-tools">
          {children}
          <SaveButton visual={visual} />
        </div>
      </figcaption>
    </figure>
  );
}
