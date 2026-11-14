import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** The same wall twice: on its own, and beside something that matters more. */
export function BiggerThing(props: VisualProps) {
  return (
    <Svg {...props}>
      <line className="ln s-ink" x1={23} y1={270} x2={377} y2={270} />

      <Label x={72} y={122}>
        The wall
      </Label>
      <rect className="f-ink" x={36} y={247} width={20} height={20} />
      <rect className="f-ink" x={72} y={137} width={50} height={130} />

      <Label x={302} y={54} anchor="end" tone="point">
        What matters
      </Label>
      <rect className="f-ink" x={216} y={247} width={20} height={20} />
      <rect className="f-ink" x={252} y={137} width={50} height={130} />
      <rect className="f-point" x={314} y={27} width={63} height={240} />
    </Svg>
  );
}
