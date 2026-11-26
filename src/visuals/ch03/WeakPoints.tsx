import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const xs = Array.from({ length: 6 }, (_, i) => 24 + i * 58);

/** Strengths are easy to feel good about. How you treat the weak spots is the real score. */
export function WeakPoints(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={24} y={56}>
        Strengths
      </Label>
      {xs.map((x) => (
        <rect key={x} className="f-dim" x={x} y={74} width={44} height={44} />
      ))}

      <Label x={24} y={176}>
        Weak points
      </Label>
      <Label x={376} y={176} anchor="end" tone="point" small>
        The real test
      </Label>
      {xs.map((x) => (
        <rect key={x} className="f-point" x={x} y={194} width={44} height={44} />
      ))}
    </Svg>
  );
}
