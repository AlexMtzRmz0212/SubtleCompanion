import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const cards = Array.from({ length: 5 }, (_, i) => 37 + i * 68);
const PLAYED = 2;

/** The hand is dealt to you. Which card you play is up to you. */
export function HandDealt(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={200} y={92} anchor="middle" tone="point">
        Your play
      </Label>
      {cards.map((x, i) => (
        <rect
          key={x}
          className={i === PLAYED ? 'f-point' : 'f-dim'}
          x={x}
          y={i === PLAYED ? 110 : 150}
          width={54}
          height={80}
        />
      ))}
      <Label x={200} y={268} anchor="middle">
        The hand you got
      </Label>
    </Svg>
  );
}
