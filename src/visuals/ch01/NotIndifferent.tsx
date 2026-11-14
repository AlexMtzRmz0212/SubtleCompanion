import type { VisualProps } from '../../data/types';
import { Label } from '../kit/shapes';
import { Svg } from '../kit/Svg';

const SIZE = 40;
const xs = Array.from({ length: 7 }, (_, i) => 36 + i * 48);

/** A row where nothing stands out, against a row where one block does. */
export function NotIndifferent(props: VisualProps) {
  return (
    <Svg {...props}>
      <Label x={36} y={58}>
        Indifferent
      </Label>
      {xs.map((x) => (
        <rect key={x} className="f-dim" x={x} y={78} width={SIZE} height={SIZE} />
      ))}

      <Label x={36} y={196}>
        Different
      </Label>
      {xs.map((x, i) =>
        i === 4 ? (
          <rect key={x} className="f-point" x={x} y={180} width={SIZE} height={SIZE} />
        ) : (
          <rect key={x} className="f-dim" x={x} y={216} width={SIZE} height={SIZE} />
        ),
      )}
    </Svg>
  );
}
