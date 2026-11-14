import { useLayoutEffect, useRef } from 'react';
import { ChapterPage } from './components/ChapterPage';
import { Home } from './components/Home';
import { SavedView } from './components/SavedView';
import { TopBar } from './components/TopBar';
import { useHashRoute, type Route } from './lib/useHashRoute';

const SITE = 'Subtle Art Companion';

function titleFor(route: Route) {
  if (route.view === 'chapter') return `${route.chapter.n}. ${route.chapter.title} · ${SITE}`;
  return route.view === 'saved' ? `Saved · ${SITE}` : SITE;
}

export function App() {
  const route = useHashRoute();
  const mainRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);
  const routeKey = route.view === 'chapter' ? route.chapter.id : route.view;

  useLayoutEffect(() => {
    document.title = titleFor(route);
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    // A new page starts at its top, with keyboard focus on its content.
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeKey]);

  return (
    <>
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
        ) : route.view === 'saved' ? (
          <SavedView />
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
    </>
  );
}
