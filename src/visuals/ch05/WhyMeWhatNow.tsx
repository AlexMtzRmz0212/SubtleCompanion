import type { VisualProps } from '../../data/types';
import { Arrow, Block, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** One event, two possible replies. Only one of them gives you something to do. */
export function WhyMeWhatNow(props: VisualProps) {
  return (
    <Svg {...props}>
      <rect className="f-dim" x={24} y={110} width={70} height={80} />
      <Label x={59} y={222} anchor="middle" small>
        Event
      </Label>

      <Arrow from={[106, 138]} to={[224, 84]} />
      <Block x={232} y={50} w={144} h={56}>
        Why me?
      </Block>

      <Arrow from={[106, 162]} to={[224, 216]} tone="point" />
      <Block x={232} y={194} w={144} h={56} tone="point">
        What now?
      </Block>
    </Svg>
  );
}
