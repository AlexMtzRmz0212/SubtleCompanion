import type { VisualProps } from '../../data/types';
import { Arrow, Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const options = [24, 76, 128, 180, 232];
const CHOSEN = 2;

/** One yes is a stack of nos. */
export function YesNeedsNo(props: VisualProps) {
  return (
    <Svg {...props}>
      <rect className="f-ink" x={24} y={125} width={50} height={50} />
      <Label x={49} y={204} anchor="middle" small>
        You
      </Label>

      <Arrow from={[86, 150]} to={[322, 150]} tone="point" />
      <Label x={204} y={136} anchor="middle" tone="point" small>
        Yes
      </Label>

      {options.map((y, i) => (
        <g key={y}>
          <rect className={i === CHOSEN ? 'f-point' : 'f-dim'} x={332} y={y} width={44} height={44} />
          {i === CHOSEN ? null : (
            <Label x={322} y={y + 28} anchor="end" small>
              No
            </Label>
          )}
        </g>
      ))}
    </Svg>
  );
}
