import type { VisualProps } from '../../data/types';
import { Block, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** If a no was never possible, a yes tells you nothing. */
export function EmptyYes(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={24} y={50}>
        Can say no
      </Label>
      <Block x={24} y={66} w={90} h={56}>
        No
      </Block>
      <Block x={126} y={66} w={90} h={56} tone="point">
        Yes
      </Block>
      <Label x={236} y={100} small>
        A real yes
      </Label>

      <Label x={24} y={178}>
        Cannot say no
      </Label>
      <Block x={24} y={194} w={90} h={56} tone="point">
        Yes
      </Block>
      <Block x={126} y={194} w={90} h={56} tone="point">
        Yes
      </Block>
      <Label x={236} y={228} small>
        An empty yes
      </Label>
    </Svg>
  );
}
