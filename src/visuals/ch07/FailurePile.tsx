import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const ROWS = 6;
const PITCH = 32;

// A pile of failures narrowing to a single square at the top.
const pile = Array.from({ length: ROWS }, (_, row) => {
  const n = ROWS - row;
  const x0 = 200 - (n * PITCH - 4) / 2;
  return Array.from({ length: n }, (_, col) => ({ x: x0 + col * PITCH, y: 222 - row * PITCH, top: row === ROWS - 1 }));
}).flat();

/** Every skill sits on a pile of attempts that went wrong. */
export function FailurePile(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={200} y={46} anchor="middle" tone="point">
        Skill
      </Label>
      {pile.map(({ x, y, top }) => (
        <rect key={`${x}-${y}`} className={top ? 'f-point' : 'f-dim'} x={x} y={y} width={28} height={28} />
      ))}
      <line className="ln s-ink" x1={23} y1={253} x2={377} y2={253} />
      <Label x={200} y={284} anchor="middle">
        Failures
      </Label>
    </Svg>
  );
}
