import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

/** Trust climbs slowly, drops at once, and climbs back slower still. */
export function TrustBroken(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={24} y={100} small>
        Built slowly
      </Label>
      <line className="ln s-ink" x1={30} y1={230} x2={170} y2={110} />
      <line className="ln s-point" x1={170} y1={110} x2={170} y2={240} />
      <line className="ln s-ink" x1={170} y1={240} x2={376} y2={150} />
      <Label x={184} y={160} tone="point" small>
        Broken
      </Label>
      <Label x={376} y={122} anchor="end" small>
        Slow to rebuild
      </Label>
    </Svg>
  );
}
