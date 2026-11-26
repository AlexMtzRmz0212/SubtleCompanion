import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const grid = Array.from({ length: 12 }, (_, i) => ({ col: i % 4, row: Math.floor(i / 4) }));
const REAL = 6;

/** When everything is an injury, the one real injury cannot be told apart. */
export function EveryAlarm(props: VisualProps) {
  return (
    <Svg {...props}>
      {grid.map(({ col, row }, i) => (
        <g key={i}>
          <circle className="f-point" cx={50 + col * 40} cy={76 + row * 48} r={15} />
          <circle className={i === REAL ? 'f-point' : 'f-dim'} cx={230 + col * 40} cy={76 + row * 48} r={15} />
        </g>
      ))}
      <Label x={110} y={244} anchor="middle">
        Every slight
      </Label>
      <Label x={290} y={244} anchor="middle" tone="point">
        Real harm
      </Label>
    </Svg>
  );
}
