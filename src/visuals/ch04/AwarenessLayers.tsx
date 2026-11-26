import type { VisualProps } from '../../data/types';
import { Arrow, Block } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** Three questions, each one deeper than the last. Most people stop before the third. */
export function AwarenessLayers(props: VisualProps) {
  return (
    <Svg {...props}>
      <Arrow from={[30, 40]} to={[30, 240]} />
      <Block x={64} y={40} w={190} h={56}>
        What I feel
      </Block>
      <Block x={64} y={112} w={250} h={56}>
        Why I feel it
      </Block>
      <Block x={64} y={184} w={312} h={56} tone="point">
        What I judge by
      </Block>
    </Svg>
  );
}
