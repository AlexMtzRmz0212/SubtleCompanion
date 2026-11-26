import { useEffect, useState } from 'react';

const FIGURES = 'figure[data-visual]';
const WAIT_MS = 1500;

let wanted: { id: string; until: number } | null = null;

/**
 * A link is scrolling to this drawing: make it the active one when it arrives, and hold the
 * current one until then so the panel does not flicker through the drawings scrolled past.
 */
export function wantVisual(id: string) {
  wanted = { id, until: performance.now() + WAIT_MS };
}

/**
 * Which drawing is the reader on? The one on the middle line of the screen, or when a row holds
 * several, the one they last clicked or focused if it is still on that line. Re-checked as the
 * page scrolls or resizes. Pass `null` off a chapter page.
 */
export function useActiveVisual(chapterId: string | null): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!chapterId) {
      setActive(null);
      return;
    }

    const pick = (prev: string | null): string | null => {
      const figures = [...document.querySelectorAll<HTMLElement>(FIGURES)];
      if (figures.length === 0) return null;
      const main = document.getElementById('main')?.getBoundingClientRect();
      const cx = main ? (main.left + main.right) / 2 : window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const rects = figures.map((el) => ({ id: el.dataset.visual ?? '', rect: el.getBoundingClientRect() }));

      const onLine = rects.filter(({ rect }) => rect.top <= cy && rect.bottom >= cy);
      if (wanted && performance.now() < wanted.until) {
        if (!onLine.some(({ id }) => id === wanted?.id)) return prev;
        const { id } = wanted;
        wanted = null;
        return id;
      }
      if (onLine.length > 0) {
        if (onLine.some(({ id }) => id === prev)) return prev;
        const distance = ({ rect }: (typeof rects)[number]) => Math.abs((rect.left + rect.right) / 2 - cx);
        return onLine.reduce((best, r) => (distance(r) < distance(best) ? r : best)).id;
      }
      // Between rows, above the first drawing or below the last: the nearest one.
      const gap = ({ rect }: (typeof rects)[number]) => Math.min(Math.abs(rect.top - cy), Math.abs(rect.bottom - cy));
      return rects.reduce((best, r) => (gap(r) < gap(best) ? r : best)).id;
    };

    let frame = 0;
    const sync = () => {
      frame = 0;
      setActive(pick);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(sync);
    };
    const choose = (e: Event) => {
      const id = (e.target as Element | null)?.closest<HTMLElement>(FIGURES)?.dataset.visual;
      if (!id) return;
      wanted = null;
      setActive(id);
    };

    sync();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    document.addEventListener('click', choose);
    document.addEventListener('focusin', choose);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      document.removeEventListener('click', choose);
      document.removeEventListener('focusin', choose);
    };
  }, [chapterId]);

  return active;
}
