import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const NOW = 32;
const years = Array.from({ length: 80 }, (_, i) => ({
  i,
  x: 68 + (i % 10) * 27,
  y: 22 + Math.floor(i / 10) * 27,
}));
const toneOf = (i: number) => (i < NOW ? 'f-ink' : i === NOW ? 'f-point' : 'f-dim');

/** Eighty squares, one per year. The edge of the grid is the point. */
export function LifeInYears(props: VisualProps) {
  return (
    <Svg {...props}>
      {years.map(({ i, x, y }) => (
        <rect key={i} className={toneOf(i)} x={x} y={y} width={22} height={22} />
      ))}

      <rect className="f-ink" x={68} y={262} width={14} height={14} />
      <Label x={90} y={276} small>
        Lived
      </Label>
      <rect className="f-point" x={160} y={262} width={14} height={14} />
      <Label x={182} y={276} tone="point" small>
        Now
      </Label>
      <rect className="f-dim" x={240} y={262} width={14} height={14} />
      <Label x={262} y={276} small>
        Left
      </Label>
    </Svg>
  );
}
