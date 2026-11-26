import { useSyncExternalStore } from 'react';
import { chapterById, visualById } from '../data/chapters';
import type { Chapter } from '../data/types';
import { wantVisual } from './useActiveVisual';

export type Route = { view: 'home' } | { view: 'chapter'; chapter: Chapter; visualId?: string };

function subscribe(listener: () => void) {
  window.addEventListener('hashchange', listener);
  return () => window.removeEventListener('hashchange', listener);
}

const readHash = () => decodeURIComponent(location.hash.slice(1));

/** Deep links: `#ch03` is a chapter, `#ch03-pain` one of its drawings, anything else home. */
export function useHashRoute(): Route {
  const hash = useSyncExternalStore(subscribe, readHash);
  const chapter = chapterById.get(hash);
  if (chapter) return { view: 'chapter', chapter };
  const found = visualById.get(hash);
  return found ? { view: 'chapter', chapter: found.chapter, visualId: found.visual.id } : { view: 'home' };
}

/** Scrolls a drawing to the middle of the screen, or to the top of the page when `id` is not a drawing on it. */
export function scrollToTarget(id: string, smooth = false) {
  const behavior: ScrollBehavior = smooth && !matchMedia('(prefers-reduced-motion: reduce)').matches ? 'smooth' : 'auto';
  const el = id ? document.getElementById(id) : null;
  if (el && visualById.has(id)) {
    wantVisual(id);
    el.scrollIntoView({ block: 'center', behavior });
  } else {
    window.scrollTo({ top: 0, behavior });
  }
}

/** Opens home (`''`), a chapter (`ch03`) or one of its drawings (`ch03-pain`). A drawing on the current page is scrolled to. */
export function goTo(id: string) {
  if ((id && document.getElementById(id)) || location.hash.slice(1) === id) scrollToTarget(id, true);
  else location.hash = id;
}
