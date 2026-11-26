import type { VisualProps } from '../../data/types';
import { Arrow, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** Your own line stops. Whatever you put into the world keeps going. */
export function WhatStays(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={24} y={100}>
        Your life
      </Label>
      <rect className="f-ink" x={24} y={128} width={44} height={44} />
      <line className="ln s-ink" x1={80} y1={150} x2={176} y2={150} />

      <rect className="f-dim" x={190} y={118} width={14} height={64} />
      <Label x={197} y={210} anchor="middle" small>
        The end
      </Label>

      <Arrow from={[218, 150]} to={[376, 150]} tone="point" />
      <Label x={376} y={118} anchor="end" tone="point">
        What stays
      </Label>
    </Svg>
  );
}
