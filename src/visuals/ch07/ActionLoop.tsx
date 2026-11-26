import type { VisualProps } from '../../data/types';
import { Arrow, Block, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** Motivation does not have to come first. Acting is what starts the loop. */
export function ActionLoop(props: VisualProps) {
  return (
    <Svg {...props}>
      <Block x={62} y={30} w={150} h={50} tone="point">
        Action
      </Block>
      <Label x={228} y={62} tone="point" small>
        Start here
      </Label>
      <Block x={236} y={212} w={148} h={50}>
        Inspired
      </Block>
      <Block x={16} y={212} w={164} h={50}>
        Motivated
      </Block>

      <Arrow from={[196, 88]} to={[288, 204]} />
      <Arrow from={[230, 237]} to={[186, 237]} />
      <Arrow from={[92, 204]} to={[124, 88]} />
    </Svg>
  );
}
