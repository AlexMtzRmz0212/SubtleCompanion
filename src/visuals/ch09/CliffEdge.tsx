import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** At the edge, the shallow worries drop off and the thing you care about is still standing. */
export function CliffEdge(props: VisualProps) {
  return (
    <Svg {...props}>
      <rect className="f-dim" x={24} y={170} width={226} height={100} />
      <rect className="f-ink" x={190} y={134} width={36} height={36} />
      <circle className="f-point" cx={140} cy={156} r={14} />
      <Label x={140} y={118} anchor="middle" tone="point" small>
        Still here
      </Label>

      <rect className="f-dim" x={262} y={186} width={16} height={16} />
      <rect className="f-dim" x={290} y={216} width={14} height={14} />
      <rect className="f-dim" x={318} y={248} width={12} height={12} />
      <Label x={376} y={160} anchor="end" small>
        Falls away
      </Label>
    </Svg>
  );
}
