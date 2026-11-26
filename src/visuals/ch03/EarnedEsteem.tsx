import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const stack = [164, 194, 224];

/** Feeling good about yourself holds up when something you did sits under it. */
export function EarnedEsteem(props: VisualProps) {
  return (
    <Svg {...props}>
      <line className="ln s-ink" x1={23} y1={253} x2={377} y2={253} />

      <Label x={89} y={44} anchor="middle">
        Unearned
      </Label>
      <rect className="f-ink" x={44} y={70} width={90} height={90} />
      <line className="ln s-dim" strokeDasharray="12 22" x1={89} y1={176} x2={89} y2={238} />

      <Label x={291} y={44} anchor="middle" tone="point">
        Earned
      </Label>
      <rect className="f-ink" x={246} y={70} width={90} height={90} />
      {stack.map((y) => (
        <rect key={y} className="f-point" x={246} y={y} width={90} height={26} />
      ))}
    </Svg>
  );
}
