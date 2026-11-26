import type { VisualProps } from '../../data/types';
import { Arrow, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const SIZE = 40;
const xs = Array.from({ length: 7 }, (_, i) => 36 + i * 48);
const edited = new Set([2, 5]);

/** Recall a memory and it comes back slightly rewritten to fit what you already think. */
export function MemoryEdited(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={36} y={52}>
        What happened
      </Label>
      {xs.map((x) => (
        <rect key={x} className="f-ink" x={x} y={72} width={SIZE} height={SIZE} />
      ))}

      <Arrow from={[200, 124]} to={[200, 166]} />

      <Label x={36} y={204}>
        What you recall
      </Label>
      {xs.map((x, i) => (
        <rect key={x} className={edited.has(i) ? 'f-point' : 'f-ink'} x={x} y={222} width={SIZE} height={SIZE} />
      ))}
    </Svg>
  );
}
