import type { VisualProps } from '../../data/types';
import { Arrow, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** Total certainty is a wall in front of your ideas. A little doubt leaves a gap. */
export function CertaintyWall(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={24} y={52}>
        Certain
      </Label>
      <Arrow from={[24, 100]} to={[186, 100]} />
      <rect className="f-dim" x={200} y={60} width={40} height={80} />

      <Label x={24} y={192}>
        Doubt
      </Label>
      <rect className="f-dim" x={200} y={170} width={40} height={40} />
      <rect className="f-dim" x={200} y={250} width={40} height={40} />
      <Arrow from={[24, 230]} to={[376, 230]} tone="point" />
    </Svg>
  );
}
