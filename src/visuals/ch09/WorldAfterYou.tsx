import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const cells = Array.from({ length: 9 }, (_, i) => ({ col: i % 3, row: Math.floor(i / 3), last: i === 8 }));

/** The same world with and without you in it. The difference is what you added. */
export function WorldAfterYou(props: VisualProps) {
  return (
    <Svg {...props}>
      {cells.map(({ col, row, last }) => (
        <g key={`${col}-${row}`}>
          {last ? null : <rect className="f-dim" x={38 + col * 44} y={70 + row * 44} width={36} height={36} />}
          <rect className={last ? 'f-point' : 'f-dim'} x={238 + col * 44} y={70 + row * 44} width={36} height={36} />
        </g>
      ))}
      <Label x={100} y={236} anchor="middle">
        Without you
      </Label>
      <Label x={300} y={236} anchor="middle" tone="point">
        With you
      </Label>
    </Svg>
  );
}
