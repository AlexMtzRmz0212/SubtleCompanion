import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** How loud a feeling is says nothing about how right it is. */
export function StrongNotRight(props: VisualProps) {
  return (
    <Svg {...props}>
      <line className="ln s-ink" x1={23} y1={253} x2={377} y2={253} />
      <rect className="f-point" x={70} y={40} width={80} height={210} />
      <rect className="f-ink" x={250} y={180} width={80} height={70} />
      <Label x={110} y={284} anchor="middle" tone="point" small>
        How strong it feels
      </Label>
      <Label x={290} y={284} anchor="middle" small>
        How right it is
      </Label>
    </Svg>
  );
}
