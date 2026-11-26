import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** The harder and more painful the attempt, the more it teaches. */
export function LearnedThroughPain(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={24} y={34} small>
        What you learn
      </Label>
      <rect className="f-dim" x={40} y={190} width={90} height={60} />
      <rect className="f-ink" x={150} y={130} width={90} height={120} />
      <rect className="f-point" x={260} y={60} width={90} height={190} />
      <line className="ln s-ink" x1={23} y1={253} x2={377} y2={253} />
      <Label x={85} y={284} anchor="middle">
        Easy
      </Label>
      <Label x={195} y={284} anchor="middle">
        Hard
      </Label>
      <Label x={305} y={284} anchor="middle" tone="point">
        Painful
      </Label>
    </Svg>
  );
}
