import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** Fault looks back at who caused it. Responsibility looks forward at who deals with it. */
export function FaultResponse(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={200} y={44} anchor="middle" small>
        Now
      </Label>
      <line className="ln s-ink" x1={200} y1={58} x2={200} y2={250} />

      <Label x={24} y={96}>
        Fault
      </Label>
      <rect className="f-dim" x={24} y={116} width={146} height={80} />
      <Label x={24} y={232} small>
        Who caused it
      </Label>

      <Label x={376} y={96} anchor="end" tone="point">
        Response
      </Label>
      <rect className="f-point" x={230} y={116} width={146} height={80} />
      <Label x={376} y={232} anchor="end" tone="point" small>
        What you do
      </Label>
    </Svg>
  );
}
