import type { VisualProps } from '../../data/types';
import { Block } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** Pleasure, money, being right and staying upbeat make a wobbly base for a life. */
export function ShakyStack(props: VisualProps) {
  return (
    <Svg {...props}>
      <Block x={110} y={220} w={180} h={40}>
        Pleasure
      </Block>
      <Block x={94} y={176} w={180} h={40}>
        Money
      </Block>
      <Block x={126} y={132} w={180} h={40}>
        Being right
      </Block>
      <Block x={100} y={88} w={180} h={40}>
        Positivity
      </Block>
      <Block x={118} y={44} w={160} h={40} tone="point">
        Your life
      </Block>
      <line className="ln s-ink" x1={23} y1={263} x2={377} y2={263} />
    </Svg>
  );
}
