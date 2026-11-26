import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const panels = [
  { x: 24, size: 56, label: 'Today' },
  { x: 148, size: 22, label: 'A year' },
  { x: 272, size: 8, label: 'A life' },
];

/** The same fear, seen against a longer and longer stretch of time. */
export function FearsShrink(props: VisualProps) {
  return (
    <Svg {...props}>
      {panels.map(({ x, size, label }) => (
        <g key={label}>
          <rect className="f-dim" x={x} y={88} width={104} height={104} />
          <rect className="f-point" x={x + 52 - size / 2} y={140 - size / 2} width={size} height={size} />
          <Label x={x + 52} y={234} anchor="middle">
            {label}
          </Label>
        </g>
      ))}
    </Svg>
  );
}
