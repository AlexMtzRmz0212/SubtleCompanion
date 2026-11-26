import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** The same result, measured by two different bars. */
export function Yardstick(props: VisualProps) {
  return (
    <Svg {...props}>
      <line className="ln s-ink" x1={23} y1={253} x2={377} y2={253} />
      <rect className="f-ink" x={70} y={150} width={80} height={100} />
      <rect className="f-ink" x={250} y={150} width={80} height={100} />

      <line className="ln s-dim" x1={60} y1={50} x2={160} y2={50} />
      <line className="ln s-dim" strokeDasharray="12 22" x1={110} y1={138} x2={110} y2={66} />
      <line className="ln s-point" x1={240} y1={144} x2={340} y2={144} />

      <Label x={110} y={284} anchor="middle" small>
        Borrowed bar
      </Label>
      <Label x={290} y={284} anchor="middle" tone="point" small>
        Chosen bar
      </Label>
    </Svg>
  );
}
