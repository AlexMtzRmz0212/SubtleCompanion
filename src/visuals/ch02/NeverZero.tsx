import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** Rich or poor, dissatisfaction never reaches the zero line. */
export function NeverZero(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={376} y={34} anchor="end" tone="point" small>
        Dissatisfaction
      </Label>
      <rect className="f-point" x={90} y={60} width={80} height={172} />
      <rect className="f-point" x={230} y={100} width={80} height={132} />
      <line className="ln s-ink" x1={23} y1={235} x2={377} y2={235} />
      <Label x={130} y={274} anchor="middle">
        Poor
      </Label>
      <Label x={270} y={274} anchor="middle">
        Rich
      </Label>
    </Svg>
  );
}
