import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** Take on more of your life and you get more say over it. */
export function ResponsibilityPower(props: VisualProps) {
  return (
    <Svg {...props}>
      <line className="ln s-ink" x1={50} y1={40} x2={50} y2={250} />
      <line className="ln s-ink" x1={47} y1={250} x2={370} y2={250} />
      <line className="ln s-point" x1={72} y1={226} x2={334} y2={76} />
      <circle className="f-point" cx={340} cy={72} r={14} />

      <Label x={64} y={46} small>
        Power
      </Label>
      <Label x={376} y={284} anchor="end" small>
        Responsibility
      </Label>
    </Svg>
  );
}
