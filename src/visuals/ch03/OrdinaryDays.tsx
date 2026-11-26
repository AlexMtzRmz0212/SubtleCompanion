import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const cells = Array.from({ length: 50 }, (_, i) => ({ col: i % 10, row: Math.floor(i / 10) }));
const isBigDay = (col: number, row: number) => col === 8 && row === 0;

/** Almost every day is ordinary. The rare big one is not where skill comes from. */
export function OrdinaryDays(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={376} y={44} anchor="end" tone="point" small>
        The big day
      </Label>
      {cells.map(({ col, row }) => (
        <rect
          key={`${col}-${row}`}
          className={isBigDay(col, row) ? 'f-point' : 'f-ink'}
          x={34 + col * 34}
          y={60 + row * 34}
          width={26}
          height={26}
        />
      ))}
      <Label x={34} y={262}>
        Ordinary days
      </Label>
    </Svg>
  );
}
