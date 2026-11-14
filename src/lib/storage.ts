/*
 * localStorage can throw (private windows, blocked site data, a full quota), so every call is
 * wrapped. The app must render and work for the session even when nothing can be saved.
 */

/** Returns the parsed value, or `undefined` when the key is missing, unreadable or not JSON. */
export function readJSON(key: string): unknown {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? undefined : JSON.parse(raw);
  } catch {
    return undefined;
  }
}

/** Returns false when the value could not be saved. */
export function writeJSON(key: string, value: unknown): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}
