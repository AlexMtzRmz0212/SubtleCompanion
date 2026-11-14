import type { VisualProps } from '../../data/types';
import { Arrow, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** Chase the good feeling and it runs; stay put and it comes to you. */
export function BackwardsLaw(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={30} y={52}>
        Chase
      </Label>
      <rect className="f-ink" x={30} y={72} width={46} height={46} />
      <Arrow from={[90, 95]} to={[188, 95]} />
      <line className="ln s-dim" x1={222} y1={95} x2={240} y2={95} />
      <line className="ln s-dim" x1={262} y1={95} x2={280} y2={95} />
      <circle className="f-point" cx={332} cy={95} r={23} />

      <Label x={30} y={192}>
        Accept
      </Label>
      <rect className="f-ink" x={30} y={212} width={46} height={46} />
      <circle className="f-point" cx={110} cy={235} r={23} />
      <line className="ln s-dim" x1={156} y1={235} x2={174} y2={235} />
      <line className="ln s-dim" x1={196} y1={235} x2={214} y2={235} />
      <line className="ln s-dim" x1={236} y1={235} x2={254} y2={235} />
    </Svg>
  );
}
