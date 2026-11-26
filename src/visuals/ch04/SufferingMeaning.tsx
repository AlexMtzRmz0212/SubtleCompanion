import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** The same pain is carried when a reason sits on the other side of the scale. */
export function SufferingMeaning(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={95} y={70} anchor="middle">
        Pain
      </Label>
      <Label x={305} y={70} anchor="middle" tone="point">
        Why
      </Label>
      <rect className="f-dim" x={60} y={92} width={70} height={70} />
      <rect className="f-point" x={270} y={92} width={70} height={70} />
      <line className="ln s-ink" x1={40} y1={165} x2={360} y2={165} />
      <polygon className="f-ink" points="200,172 166,246 234,246" />
      <line className="ln s-ink" x1={150} y1={249} x2={250} y2={249} />
    </Svg>
  );
}
