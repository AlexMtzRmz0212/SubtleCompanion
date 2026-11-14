import type { Route } from '../lib/useHashRoute';

export function TopBar({ view }: { view: Route['view'] }) {
  return (
    <header className="bar wrap">
      <a className="wordmark" href="#" translate="no">
        Subtle Art <span>companion</span>
      </a>
      <nav aria-label="Main">
        <a href="#" aria-current={view === 'home' ? 'page' : undefined}>
          Chapters
        </a>
        <a href="#saved" aria-current={view === 'saved' ? 'page' : undefined}>
          Saved
        </a>
      </nav>
    </header>
  );
}
