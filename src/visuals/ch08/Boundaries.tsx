import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** Orange squares are problems. In a healthy pair each person holds their own. */
export function Boundaries(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={24} y={50}>
        Healthy
      </Label>
      <rect className="f-ink" x={24} y={70} width={60} height={60} />
      <rect className="f-point" x={92} y={86} width={28} height={28} />
      <rect className="f-ink" x={240} y={70} width={60} height={60} />
      <rect className="f-point" x={308} y={86} width={28} height={28} />
      <Label x={54} y={152} anchor="middle" small>
        You
      </Label>
      <Label x={270} y={152} anchor="middle" small>
        Them
      </Label>

      <Label x={24} y={182}>
        Unhealthy
      </Label>
      <rect className="f-ink" x={24} y={202} width={60} height={60} />
      <rect className="f-point" x={92} y={202} width={28} height={28} />
      <rect className="f-point" x={92} y={234} width={28} height={28} />
      <rect className="f-ink" x={240} y={202} width={60} height={60} />
      <Label x={54} y={284} anchor="middle" small>
        You
      </Label>
      <Label x={270} y={284} anchor="middle" small>
        Them
      </Label>
    </Svg>
  );
}
