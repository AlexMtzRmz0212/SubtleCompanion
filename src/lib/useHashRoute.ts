import { useSyncExternalStore } from 'react';
import { chapterById } from '../data/chapters';
import type { Chapter } from '../data/types';

export type Route = { view: 'home' } | { view: 'saved' } | { view: 'chapter'; chapter: Chapter };

function subscribe(listener: () => void) {
  window.addEventListener('hashchange', listener);
  return () => window.removeEventListener('hashchange', listener);
}

const readHash = () => decodeURIComponent(location.hash.slice(1));

/** Deep links: `#ch03` is a chapter, `#saved` the saved visuals, anything else home. */
export function useHashRoute(): Route {
  const hash = useSyncExternalStore(subscribe, readHash);
  if (hash === 'saved') return { view: 'saved' };
  const chapter = chapterById.get(hash);
  return chapter ? { view: 'chapter', chapter } : { view: 'home' };
}
