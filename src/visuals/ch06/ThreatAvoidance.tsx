import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const SIZE = 36;
const THREAT_X = 340;
const rows = [
  { y: 70, x: 230, r: 10 },
  { y: 150, x: 150, r: 18 },
  { y: 230, x: 60, r: 26 },
];

/** The more a thing threatens who you think you are, the further you stand from it. */
export function ThreatAvoidance(props: VisualProps) {
  return (
    <Svg {...props}>
      {rows.map(({ y, x, r }) => (
        <g key={y}>
          <rect className="f-ink" x={x} y={y - SIZE / 2} width={SIZE} height={SIZE} />
          <line className="ln s-dim" strokeDasharray="12 22" x1={x + SIZE + 12} y1={y} x2={THREAT_X - r - 12} y2={y} />
          <circle className="f-point" cx={THREAT_X} cy={y} r={r} />
        </g>
      ))}
      <Label x={78} y={284} anchor="middle" small>
        You
      </Label>
      <Label x={THREAT_X} y={284} anchor="middle" tone="point" small>
        Threat
      </Label>
    </Svg>
  );
}
