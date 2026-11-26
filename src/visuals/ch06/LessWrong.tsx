import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const heights = [180, 120, 80, 52, 34, 22];

/** Each pass leaves you a little less wrong. It never reaches zero. */
export function LessWrong(props: VisualProps) {
  return (
    <Svg {...props}>
      {heights.map((h, i) => (
        <rect key={i} className={i === heights.length - 1 ? 'f-point' : 'f-ink'} x={28 + i * 60} y={250 - h} width={44} height={h} />
      ))}
      <line className="ln s-ink" x1={23} y1={253} x2={377} y2={253} />
      <Label x={376} y={198} anchor="end" tone="point" small>
        Never zero
      </Label>
      <Label x={24} y={284}>
        Wrong
      </Label>
      <Label x={376} y={284} anchor="end">
        Less wrong
      </Label>
    </Svg>
  );
}
