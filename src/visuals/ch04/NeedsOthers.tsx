import type { VisualProps } from '../../data/types';
import { Arrow, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** A value you can act on is within reach. One that needs other people to cooperate is not. */
export function NeedsOthers(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={24} y={52}>
        Needs other people
      </Label>
      <rect className="f-ink" x={24} y={78} width={44} height={44} />
      <line className="ln s-dim" strokeDasharray="12 22" x1={90} y1={100} x2={300} y2={100} />
      <circle className="f-dim" cx={346} cy={100} r={26} />

      <Label x={24} y={182}>
        Needs only you
      </Label>
      <rect className="f-ink" x={24} y={210} width={44} height={44} />
      <Arrow from={[80, 232]} to={[168, 232]} tone="point" />
      <rect className="f-point" x={176} y={210} width={44} height={44} />
    </Svg>
  );
}
