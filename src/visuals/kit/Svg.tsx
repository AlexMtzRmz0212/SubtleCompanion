import { useId, type ReactNode } from 'react';
import type { VisualProps } from '../../data/types';

/** The canvas every drawing shares: 400 by 300 units, with lines 6 units thick. */
export function Svg({ name, alt, children }: VisualProps & { children: ReactNode }) {
  const id = useId();
  return (
    <svg className="v" viewBox="0 0 400 300" role="img" aria-labelledby={`${id}t ${id}d`}>
      <title id={`${id}t`}>{name}</title>
      <desc id={`${id}d`}>{alt}</desc>
      {children}
    </svg>
  );
}
