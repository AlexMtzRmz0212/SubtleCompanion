import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

// The same scatter on every load: a small fixed-seed generator nudges a 6 by 5 grid.
let seed = 7;
const nudge = () => {
  seed = (seed * 16807) % 2147483647;
  return Math.round((seed / 2147483647 - 0.5) * 18);
};
const smallDots = Array.from({ length: 30 }, (_, i) => ({
  x: 36 + (i % 6) * 28 + nudge(),
  y: 40 + Math.floor(i / 6) * 46 + nudge(),
}));

/** Many small cares go in, a few large ones come out. */
export function CareNarrows(props: VisualProps) {
  return (
    <Svg {...props}>
      {smallDots.map((d, i) => (
        <circle key={i} className="f-ink" cx={d.x} cy={d.y} r={6} />
      ))}

      <line className="ln s-ink" x1={204} y1={27} x2={268} y2={112} />
      <line className="ln s-ink" x1={204} y1={243} x2={268} y2={158} />

      <circle className="f-point" cx={330} cy={71} r={27} />
      <circle className="f-point" cx={330} cy={135} r={27} />
      <circle className="f-point" cx={330} cy={199} r={27} />

      <Label x={24} y={284} small>
        Younger
      </Label>
      <Label x={376} y={284} anchor="end" small>
        Older
      </Label>
    </Svg>
  );
}
