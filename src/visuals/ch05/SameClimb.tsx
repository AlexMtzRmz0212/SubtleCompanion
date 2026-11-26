import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** Two identical hills. Only one was picked. */
export function SameClimb(props: VisualProps) {
  return (
    <Svg {...props}>
      <polygon className="f-dim" points="30,230 105,110 180,230" />
      <polygon className="f-dim" points="220,230 295,110 370,230" />
      <line className="ln s-ink" x1={23} y1={233} x2={377} y2={233} />
      <rect className="f-ink" x={72} y={172} width={20} height={20} />
      <rect className="f-ink" x={262} y={172} width={20} height={20} />
      <circle className="f-point" cx={105} cy={96} r={14} />

      <Label x={105} y={272} anchor="middle" tone="point">
        Chose it
      </Label>
      <Label x={295} y={272} anchor="middle">
        Forced
      </Label>
    </Svg>
  );
}
