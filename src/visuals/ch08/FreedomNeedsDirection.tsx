import type { VisualProps } from '../../data/types';
import { Arrow, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const CY = 130;
const LEFT_X = 90;
const RIGHT_X = 270;

const spokes = Array.from({ length: 8 }, (_, i) => {
  const a = (i * Math.PI) / 4;
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  return {
    x1: Math.round(LEFT_X + 24 * cos),
    y1: Math.round(CY + 24 * sin),
    x2: Math.round(LEFT_X + 66 * cos),
    y2: Math.round(CY + 66 * sin),
  };
});

/** Open in every direction is a point nowhere. One direction gives freedom something to do. */
export function FreedomNeedsDirection(props: VisualProps) {
  return (
    <Svg {...props}>
      {spokes.map((s, i) => (
        <line key={i} className="ln s-dim" {...s} />
      ))}
      <circle className="f-ink" cx={LEFT_X} cy={CY} r={14} />
      <Label x={LEFT_X} y={256} anchor="middle">
        Any way
      </Label>

      <circle className="f-ink" cx={RIGHT_X} cy={CY} r={14} />
      <Arrow from={[RIGHT_X + 22, CY]} to={[376, CY]} tone="point" />
      <Label x={RIGHT_X} y={256} anchor="middle" tone="point">
        One way
      </Label>
    </Svg>
  );
}
