import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const xs = Array.from({ length: 7 }, (_, i) => 24 + i * 52);

/** The best-off and the worst-off both claim to be the exception to everyone else. */
export function TwoEntitlements(props: VisualProps) {
  return (
    <Svg {...props}>
      <rect className="f-point" x={176} y={28} width={48} height={48} />
      <Label x={240} y={60}>
        Best
      </Label>

      <Label x={24} y={112} small>
        Most people
      </Label>
      {xs.map((x) => (
        <rect key={x} className="f-dim" x={x} y={126} width={40} height={44} />
      ))}

      <rect className="f-point" x={176} y={224} width={48} height={48} />
      <Label x={240} y={258}>
        Worst off
      </Label>
    </Svg>
  );
}
