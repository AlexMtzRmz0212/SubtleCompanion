import { useRef, useState, type PointerEvent } from 'react';
import './CareBudget.css';

const POOL = 10;
const SMALL_ROOM = 2;
const BIG_ROOM = 4;

interface Thing {
  id: string;
  label: string;
}

const SMALL: Thing[] = [
  { id: 'stranger', label: "A stranger's opinion" },
  { id: 'queue', label: 'The slow queue' },
  { id: 'likes', label: 'Likes on a post' },
  { id: 'argument', label: 'Winning the argument' },
  { id: 'ex', label: "An ex's new life" },
  { id: 'car', label: "The neighbour's car" },
];

const BIG: Thing[] = [
  { id: 'people', label: 'People you love' },
  { id: 'work', label: 'Work you believe in' },
];

const roomOf = (id: string) => (BIG.some((t) => t.id === id) ? BIG_ROOM : SMALL_ROOM);
const total = (spent: Record<string, number>) => Object.values(spent).reduce((a, b) => a + b, 0);

function statusFor(left: number, onBig: number) {
  if (left === POOL) return 'Tap a thing to spend a block on it, or drag a block there.';
  if (left > 0) return onBig === BIG.length * BIG_ROOM ? 'What matters is full.' : 'Each block can only go to one thing.';
  if (onBig === BIG.length * BIG_ROOM) return 'All spent, and what matters is full. Everything else got a no.';
  if (onBig === 0) return 'All spent. Nothing is left for what matters.';
  return 'All spent. What matters is only part full.';
}

function ThingRow({
  thing,
  room,
  count,
  onGive,
  onTake,
}: {
  thing: Thing;
  room: number;
  count: number;
  onGive: (id: string) => void;
  onTake: (id: string) => void;
}) {
  return (
    <li className="thing" data-thing={thing.id}>
      <button type="button" className="thing-give" onClick={() => onGive(thing.id)}>
        <span>{thing.label}</span>
        <span className="thing-slots" aria-hidden="true">
          {Array.from({ length: room }, (_, i) => (
            <span key={i} className="slot" data-full={i < count || undefined} />
          ))}
        </span>
        <span className="visually-hidden">
          : {count} of {room} blocks. Give one block.
        </span>
      </button>
      <button
        type="button"
        className="thing-take"
        onClick={() => onTake(thing.id)}
        disabled={count === 0}
        aria-label={`Take one block back from ${thing.label}`}
      >
        <span aria-hidden="true">−</span>
      </button>
    </li>
  );
}

/** Ten blocks of care to hand out. Spending them on small stuff leaves what matters empty. */
export function CareBudget() {
  const [spent, setSpent] = useState<Record<string, number>>({});
  const dragStart = useRef<{ x: number; y: number } | null>(null);

  const left = POOL - total(spent);
  const onBig = BIG.reduce((sum, t) => sum + (spent[t.id] ?? 0), 0);

  const give = (id: string) =>
    setSpent((prev) => {
      const n = prev[id] ?? 0;
      if (total(prev) >= POOL || n >= roomOf(id)) return prev;
      return { ...prev, [id]: n + 1 };
    });

  const take = (id: string) =>
    setSpent((prev) => {
      const n = prev[id] ?? 0;
      return n === 0 ? prev : { ...prev, [id]: n - 1 };
    });

  // Dragging moves the block itself with a transform; nothing re-renders until it is dropped.
  const onPointerDown = (e: PointerEvent<HTMLSpanElement>) => {
    if (e.button !== 0 || e.currentTarget.dataset.spent !== undefined) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.dataset.dragging = '';
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerMove = (e: PointerEvent<HTMLSpanElement>) => {
    const start = dragStart.current;
    if (!start) return;
    e.currentTarget.style.transform = `translate(${e.clientX - start.x}px, ${e.clientY - start.y}px) scale(1.1)`;
  };

  const endDrag = (e: PointerEvent<HTMLSpanElement>, drop: boolean) => {
    if (!dragStart.current) return;
    dragStart.current = null;
    const block = e.currentTarget;
    const row = drop
      ? document
          .elementsFromPoint(e.clientX, e.clientY)
          .map((el) => el.closest<HTMLElement>('[data-thing]'))
          .find((el) => el !== null && el !== undefined)
      : undefined;
    block.style.transform = '';
    if (row?.dataset.thing) {
      // Landed: the block is used up where it was dropped, so it must not glide back to the pool.
      void block.offsetWidth;
      give(row.dataset.thing);
    }
    delete block.dataset.dragging;
  };

  return (
    <div className="budget" data-starved={(left === 0 && onBig < BIG.length * BIG_ROOM) || undefined}>
      <div className="budget-head">
        <p className="budget-count">
          <strong>{left}</strong> <span>of {POOL} blocks of care left</span>
        </p>
        <button type="button" className="button button-quiet" onClick={() => setSpent({})} disabled={left === POOL}>
          Start over
        </button>
      </div>

      <div className="budget-pool" aria-hidden="true">
        {Array.from({ length: POOL }, (_, i) => (
          <span
            key={i}
            className="care"
            data-spent={i >= left ? '' : undefined}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={(e) => endDrag(e, true)}
            onPointerCancel={(e) => endDrag(e, false)}
          />
        ))}
      </div>

      <p className="budget-status" role="status">
        {statusFor(left, onBig)}
      </p>

      <div className="budget-groups">
        <section aria-labelledby="budget-small">
          <h2 id="budget-small">Small stuff</h2>
          <ul>
            {SMALL.map((t) => (
              <ThingRow key={t.id} thing={t} room={SMALL_ROOM} count={spent[t.id] ?? 0} onGive={give} onTake={take} />
            ))}
          </ul>
        </section>
        <section className="budget-big" aria-labelledby="budget-big">
          <h2 id="budget-big">What matters</h2>
          <ul>
            {BIG.map((t) => (
              <ThingRow key={t.id} thing={t} room={BIG_ROOM} count={spent[t.id] ?? 0} onGive={give} onTake={take} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
