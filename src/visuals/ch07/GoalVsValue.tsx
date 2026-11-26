import type { VisualProps } from '../../data/types';
import { Arrow, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** A goal ends at a finish line. An ongoing value has no edge to run out at. */
export function GoalVsValue(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={24} y={52}>
        Goal
      </Label>
      <Arrow from={[24, 100]} to={[220, 100]} />
      <rect className="f-ink" x={232} y={70} width={34} height={60} />
      <Label x={376} y={106} anchor="end" small>
        Now what?
      </Label>

      <Label x={24} y={172}>
        Ongoing value
      </Label>
      <Arrow from={[24, 222]} to={[376, 222]} tone="point" />
    </Svg>
  );
}
