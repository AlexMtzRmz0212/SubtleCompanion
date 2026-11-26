import type { VisualProps } from '../../data/types';
import { Arrow, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** The lower you already are, the shorter the fall, so the easier it is to take a risk. */
export function LittleToLose(props: VisualProps) {
  return (
    <Svg {...props}>
      <line className="ln s-ink" x1={23} y1={253} x2={377} y2={253} />

      <rect className="f-dim" x={50} y={100} width={80} height={150} />
      <rect className="f-ink" x={70} y={60} width={40} height={40} />
      <Arrow from={[158, 108]} to={[158, 244]} tone="point" />

      <rect className="f-dim" x={250} y={210} width={80} height={40} />
      <rect className="f-ink" x={270} y={170} width={40} height={40} />
      <Arrow from={[358, 212]} to={[358, 244]} tone="point" />

      <Label x={90} y={284} anchor="middle">
        High up
      </Label>
      <Label x={290} y={284} anchor="middle">
        Rock bottom
      </Label>
    </Svg>
  );
}
