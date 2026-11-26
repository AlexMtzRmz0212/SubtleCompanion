import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const heights = [14, 26, 52, 90, 120, 140, 120, 90, 52, 26, 14];
const isEdge = (i: number) => i < 2 || i > 8;

/** Real life is a bell of ordinary. The feed only shows the two thin ends. */
export function ExtremesOnly(props: VisualProps) {
  return (
    <Svg {...props}>
      {heights.map((h, i) => (
        <rect key={i} className={isEdge(i) ? 'f-point' : 'f-ink'} x={28 + i * 32} y={240 - h} width={24} height={h} />
      ))}
      <line className="ln s-ink" x1={23} y1={243} x2={377} y2={243} />

      <Label x={24} y={278} tone="point" small>
        Seen online
      </Label>
      <Label x={200} y={278} anchor="middle" small>
        Real life
      </Label>
      <Label x={376} y={278} anchor="end" tone="point" small>
        Seen online
      </Label>
    </Svg>
  );
}
