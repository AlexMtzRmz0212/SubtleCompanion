import { useLayoutEffect, useRef } from 'react';
import { ChapterPage } from './components/ChapterPage';
import { Home } from './components/Home';
import { NotesPanel } from './components/NotesPanel';
import { TopBar } from './components/TopBar';
import { scrollToTarget, useHashRoute, type Route } from './lib/useHashRoute';
import { useNotesOpen } from './lib/useNotes';
import { useIsOwner } from './lib/useOwner';

const SITE = 'Subtle Art Companion';

function titleFor(route: Route) {
  return route.view === 'chapter' ? `${route.chapter.n}. ${route.chapter.title} · ${SITE}` : SITE;
}

export function App() {
  const route = useHashRoute();
  const owner = useIsOwner();
  const notesOpen = useNotesOpen();
  const mainRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);
  const visualId = route.view === 'chapter' ? route.visualId : undefined;
  const routeKey = route.view === 'chapter' ? `${route.chapter.id}/${visualId ?? ''}` : route.view;

  useLayoutEffect(() => {
    document.title = titleFor(route);
    const first = firstRender.current;
    firstRender.current = false;
    // A new page starts at its top, or at the drawing a link points to, with keyboard focus on its content.
    if (first && !visualId) return;
    scrollToTarget(visualId ?? '');
    if (!first) mainRef.current?.focus({ preventScroll: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeKey]);

  return (
    <div className="app" data-notes={owner && notesOpen ? 'open' : undefined}>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          mainRef.current?.focus();
        }}
      >
        Skip to content
      </a>
      <TopBar view={route.view} />
      <main ref={mainRef} id="main" tabIndex={-1}>
        {route.view === 'chapter' ? (
          <ChapterPage key={route.chapter.id} chapter={route.chapter} />
        ) : (
          <Home />
        )}
      </main>
      <footer className="site-foot wrap">
        <p>
          An unofficial visual study aid for <cite>The Subtle Art of Not Giving a F*ck</cite> by Mark Manson. The
          drawings and captions are original and are no substitute for the book. Not affiliated with the author or
          publisher.
        </p>
      </footer>
      {owner ? <NotesPanel route={route} /> : null}
    </div>
  );
}
