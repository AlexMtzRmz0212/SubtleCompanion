import { useState } from 'react';
import type { Route } from '../lib/useHashRoute';
import { logOut, useIsOwner } from '../lib/useOwner';
import { LoginDialog } from './LoginDialog';

export function TopBar({ view }: { view: Route['view'] }) {
  const owner = useIsOwner();
  const [loggingIn, setLoggingIn] = useState(false);

  return (
    <header className="bar wrap">
      <a className="wordmark" href="#" translate="no">
        Subtle Art <span>companion</span>
      </a>
      <nav aria-label="Main">
        <a href="#" aria-current={view === 'home' ? 'page' : undefined}>
          Chapters
        </a>
        {owner ? (
          <button type="button" onClick={logOut}>
            Log out
          </button>
        ) : (
          <button type="button" onClick={() => setLoggingIn(true)}>
            Owner login
          </button>
        )}
      </nav>
      {loggingIn ? <LoginDialog onClose={() => setLoggingIn(false)} /> : null}
    </header>
  );
}
