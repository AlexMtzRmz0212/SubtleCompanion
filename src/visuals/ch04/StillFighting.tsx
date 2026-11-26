import type { VisualProps } from '../../data/types';
import { Block, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** A soldier kept fighting for almost thirty years after the war ended, because it still meant something. */
export function StillFighting(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={112} y={82} anchor="middle" small>
        War ends
      </Label>
      <line className="ln s-ink" x1={112} y1={96} x2={112} y2={200} />
      <Block x={24} y={120} w={84} h={56}>
        War
      </Block>
      <Block x={116} y={120} w={260} h={56} tone="point">
        Still fighting
      </Block>
      <Label x={376} y={216} anchor="end" tone="point" small>
        Almost 30 years more
      </Label>
    </Svg>
  );
}
