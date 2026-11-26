import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const grand: [number, number][] = [
  [30, 60],
  [105, 60],
  [180, 60],
  [30, 135],
  [180, 135],
  [30, 210],
  [105, 210],
  [180, 210],
];

/** Every grand claim about yourself is one more thing to defend. */
export function PlainIdentity(props: VisualProps) {
  return (
    <Svg {...props}>
      <rect className="f-dim" x={30} y={60} width={150} height={150} />
      {grand.map(([x, y]) => (
        <circle key={`${x}-${y}`} className="f-point" cx={x} cy={y} r={11} />
      ))}

      <rect className="f-ink" x={255} y={100} width={70} height={70} />
      <circle className="f-point" cx={255} cy={100} r={11} />
      <circle className="f-point" cx={325} cy={170} r={11} />

      <Label x={105} y={270} anchor="middle">
        Grand story
      </Label>
      <Label x={290} y={270} anchor="middle">
        Plain story
      </Label>
    </Svg>
  );
}
