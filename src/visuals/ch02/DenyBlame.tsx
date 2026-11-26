import type { VisualProps } from '../../data/types';
import { Arrow, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** Looking away and pointing at someone else both leave the problem exactly where it was. */
export function DenyBlame(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={24} y={52}>
        Deny
      </Label>
      <rect className="f-ink" x={170} y={78} width={44} height={44} />
      <Arrow from={[158, 100]} to={[60, 100]} />
      <rect className="f-point" x={326} y={75} width={50} height={50} />

      <Label x={24} y={182}>
        Blame
      </Label>
      <rect className="f-ink" x={24} y={210} width={44} height={44} />
      <Arrow from={[80, 232]} to={[168, 232]} />
      <circle className="f-dim" cx={196} cy={232} r={22} />
      <rect className="f-point" x={326} y={207} width={50} height={50} />

      <Label x={376} y={288} anchor="end" tone="point" small>
        Still there
      </Label>
    </Svg>
  );
}
