import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const samples = Array.from({ length: 8 }, (_, i) => 24 + i * 24);

/** Eight shallow tries, or one thing taken as far as it goes. */
export function GoDeep(props: VisualProps) {
  return (
    <Svg {...props}>
      {samples.map((x) => (
        <rect key={x} className="f-dim" x={x} y={214} width={18} height={36} />
      ))}
      <rect className="f-point" x={290} y={60} width={60} height={190} />
      <line className="ln s-ink" x1={23} y1={253} x2={377} y2={253} />
      <Label x={117} y={284} anchor="middle">
        Sample many
      </Label>
      <Label x={320} y={284} anchor="middle" tone="point">
        Go deep
      </Label>
    </Svg>
  );
}
