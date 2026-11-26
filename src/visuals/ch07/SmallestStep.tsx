import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** The whole project is huge. The first step does not have to be. */
export function SmallestStep(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={24} y={44}>
        The whole thing
      </Label>
      <rect className="f-dim" x={24} y={60} width={352} height={130} />
      <rect className="f-point" x={24} y={214} width={40} height={40} />
      <Label x={76} y={244} tone="point">
        Start here
      </Label>
    </Svg>
  );
}
