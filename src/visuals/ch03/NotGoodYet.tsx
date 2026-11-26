import type { VisualProps } from '../../data/types';
import { Arrow, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const steps = [0, 1, 2, 3];

/** You climb because you admit you are on the bottom step. */
export function NotGoodYet(props: VisualProps) {
  return (
    <Svg {...props}>
      {steps.map((i) => (
        <rect key={i} className="f-dim" x={24 + i * 88} y={210 - i * 40} width={88} height={40 + i * 40} />
      ))}
      <line className="ln s-ink" x1={23} y1={253} x2={377} y2={253} />
      <rect className="f-point" x={46} y={174} width={36} height={36} />
      <Arrow from={[92, 150]} to={[270, 56]} />

      <Label x={376} y={72} anchor="end">
        Good
      </Label>
      <Label x={24} y={284} tone="point">
        Not good yet
      </Label>
    </Svg>
  );
}
