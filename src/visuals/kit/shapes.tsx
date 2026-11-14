/*
 * The parts every drawing is made of. Three tones only: `ink` (off-white) for the drawing, `dim`
 * (grey) for what does not matter, and `point` (orange) for the one thing the drawing is about.
 */
export type Tone = 'ink' | 'dim' | 'point';
type Point = [x: number, y: number];

const HEAD = 18;
const HALF = 11;

/** A straight line that ends in a solid arrowhead at `to`. */
export function Arrow({ from, to, tone = 'ink' }: { from: Point; to: Point; tone?: Tone }) {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const length = Math.hypot(x2 - x1, y2 - y1);
  const ux = (x2 - x1) / length;
  const uy = (y2 - y1) / length;
  const bx = x2 - ux * HEAD;
  const by = y2 - uy * HEAD;
  const head = [
    [x2, y2],
    [bx - uy * HALF, by + ux * HALF],
    [bx + uy * HALF, by - ux * HALF],
  ]
    .map(([x, y]) => `${Math.round(x)},${Math.round(y)}`)
    .join(' ');

  return (
    <g>
      <line className={`ln s-${tone}`} x1={x1} y1={y1} x2={Math.round(bx)} y2={Math.round(by)} strokeLinecap="butt" />
      <polygon className={`f-${tone}`} points={head} />
    </g>
  );
}

/** Text on the panel. Grey is too faint for words, so labels are off-white or orange only. */
export function Label({
  x,
  y,
  children,
  anchor = 'start',
  tone = 'ink',
  small,
}: {
  x: number;
  y: number;
  children: string;
  anchor?: 'start' | 'middle' | 'end';
  tone?: 'ink' | 'point';
  small?: boolean;
}) {
  return (
    <text className={`lb ${small ? 'lb-s' : 'lb-l'} f-${tone}`} x={x} y={y} textAnchor={anchor}>
      {children}
    </text>
  );
}

/** A solid box with a word in it, written in black. */
export function Block({
  x,
  y,
  w,
  h,
  children,
  tone = 'ink',
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  children: string;
  tone?: 'ink' | 'point';
}) {
  return (
    <g>
      <rect className={`f-${tone}`} x={x} y={y} width={w} height={h} />
      <text className="lb lb-l f-ground" x={x + w / 2} y={y + h / 2} textAnchor="middle" dominantBaseline="central">
        {children}
      </text>
    </g>
  );
}
