import type { VisualProps } from '../../data/types';
import { Arrow, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** Care pointed at something bigger than you is what makes a life feel like enough. */
export function BiggerThanYou(props: VisualProps) {
  return (
    <Svg {...props}>
      <circle className="f-ink" cx={50} cy={140} r={22} />
      <Label x={50} y={196} anchor="middle" small>
        You
      </Label>

      <Arrow from={[90, 140]} to={[212, 140]} tone="point" />
      <circle className="f-point" cx={296} cy={140} r={80} />
      <Label x={296} y={256} anchor="middle" tone="point" small>
        Bigger than you
      </Label>
    </Svg>
  );
}
