import type { VisualProps } from '../../data/types';
import { Arrow, Block } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** The loop of feeling bad about feeling bad, and the one way out of it. */
export function FeedbackLoop(props: VisualProps) {
  return (
    <Svg {...props}>
      <Block x={62} y={30} w={150} h={50}>
        Feel bad
      </Block>
      <Block x={236} y={212} w={148} h={50}>
        Judge it
      </Block>
      <Block x={16} y={212} w={164} h={50}>
        Feel worse
      </Block>

      <Arrow from={[196, 88]} to={[288, 204]} />
      <Arrow from={[230, 237]} to={[186, 237]} />
      <Arrow from={[92, 204]} to={[124, 88]} />

      <Arrow from={[218, 55]} to={[258, 55]} tone="point" />
      <Block x={262} y={30} w={122} h={50} tone="point">
        So what?
      </Block>
    </Svg>
  );
}
