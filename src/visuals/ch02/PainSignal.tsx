import type { VisualProps } from '../../data/types';
import { Arrow, Block, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** Pain is the signal that points at what needs attention. */
export function PainSignal(props: VisualProps) {
  return (
    <Svg {...props}>
      <Block x={24} y={118} w={110} h={64}>
        Pain
      </Block>
      <Label x={186} y={128} anchor="middle" small>
        Signal
      </Label>
      <Arrow from={[146, 150]} to={[226, 150]} tone="point" />
      <Block x={236} y={118} w={140} h={64} tone="point">
        Look here
      </Block>
    </Svg>
  );
}
