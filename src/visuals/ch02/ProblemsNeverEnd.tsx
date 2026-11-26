import type { VisualProps } from '../../data/types';
import { Arrow, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const xs = [24, 100, 176, 252, 328];

/** Solve one problem and the next is already waiting. */
export function ProblemsNeverEnd(props: VisualProps) {
  return (
    <Svg {...props}>
      {xs.map((x, i) => (
        <rect key={x} className={i < 2 ? 'f-ink' : i === 2 ? 'f-point' : 'f-dim'} x={x} y={70} width={52} height={60} />
      ))}
      <Arrow from={[24, 190]} to={[376, 190]} />
      <Label x={88} y={250} anchor="middle">
        Solved
      </Label>
      <Label x={202} y={250} anchor="middle" tone="point">
        Now
      </Label>
      <Label x={316} y={250} anchor="middle">
        Next
      </Label>
    </Svg>
  );
}
