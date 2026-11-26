import { useEffect, useRef, useState, type FormEvent } from 'react';
import { logIn } from '../lib/useOwner';

const FAILURES = {
  wrong: 'Wrong password.',
  insecure: 'Login needs a secure page (https).',
};

/** A modal password prompt. Mount it to open it; it calls `onClose` when it is dismissed or the login worked. */
export function LoginDialog({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const password = String(new FormData(e.currentTarget).get('password') ?? '');
    setBusy(true);
    const result = await logIn(password);
    setBusy(false);
    if (result === 'ok') ref.current?.close();
    else setError(FAILURES[result]);
  }

  return (
    <dialog
      ref={ref}
      className="login"
      aria-labelledby="login-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      <form onSubmit={submit}>
        <h2 id="login-title">Owner login</h2>
        <div className="login-field">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? 'login-error' : undefined}
            onChange={() => setError('')}
          />
          <p id="login-error" className="login-error" role="alert">
            {error}
          </p>
        </div>
        <div className="login-actions">
          <button type="submit" className="button button-accent" disabled={busy}>
            Log in
          </button>
          <button type="button" className="button button-quiet" onClick={() => ref.current?.close()}>
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
}
