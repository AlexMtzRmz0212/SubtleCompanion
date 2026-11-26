import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const bumps = [112, 166, 220];

/** The prize is easy to want. The grind in front of it is what you actually sign up for. */
export function WillingToStruggle(props: VisualProps) {
  return (
    <Svg {...props}>
      <line className="ln s-ink" x1={23} y1={200} x2={377} y2={200} />
      <rect className="f-ink" x={30} y={144} width={56} height={56} />
      {bumps.map((x) => (
        <rect key={x} className="f-dim" x={x} y={160} width={40} height={40} />
      ))}
      <circle className="f-point" cx={334} cy={160} r={40} />

      <Label x={186} y={122} anchor="middle">
        The grind
      </Label>
      <Label x={334} y={100} anchor="middle" tone="point">
        Reward
      </Label>
      <Label x={58} y={236} anchor="middle" small>
        You
      </Label>
    </Svg>
  );
}
