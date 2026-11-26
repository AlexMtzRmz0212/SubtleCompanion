import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

// Random-looking points, placed by hand so the picture is the same on every load.
const noise: [number, number][] = [
  [40, 50],
  [140, 40],
  [210, 40],
  [322, 50],
  [362, 112],
  [50, 172],
  [120, 232],
  [60, 250],
  [180, 190],
  [350, 172],
  [270, 255],
  [372, 234],
];

// Five of them happen to line up, and the mind joins the dots.
const chosen: [number, number][] = [
  [90, 90],
  [160, 150],
  [230, 110],
  [290, 190],
  [220, 230],
];

const path = chosen.map(([x, y]) => `${x},${y}`).join(' ');

/** Random points. The mind draws a shape through a few of them and calls it a pattern. */
export function PatternInNoise(props: VisualProps) {
  return (
    <Svg {...props}>
      {noise.map(([x, y]) => (
        <circle key={`${x}-${y}`} className="f-dim" cx={x} cy={y} r={8} />
      ))}
      <polyline className="ln s-point" points={path} />
      {chosen.map(([x, y]) => (
        <circle key={`${x}-${y}`} className="f-point" cx={x} cy={y} r={11} />
      ))}
      <Label x={376} y={288} anchor="end" tone="point" small>
        A pattern?
      </Label>
    </Svg>
  );
}
