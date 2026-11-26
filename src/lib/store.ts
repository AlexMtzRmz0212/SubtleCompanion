import { useSyncExternalStore } from 'react';

/*
 * localStorage can throw (private windows, blocked site data, a full quota), so every call is
 * wrapped. The app keeps working in memory for the session even when nothing can be stored.
 */
function readJSON(key: string): unknown {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? undefined : JSON.parse(raw);
  } catch {
    return undefined;
  }
}

function writeJSON(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Nothing to do: the value stays in memory.
  }
}

export interface Store<T> {
  get(): T;
  set(next: T | ((prev: T) => T)): void;
  subscribe(listener: () => void): () => void;
}

/** A value kept in memory and mirrored to one localStorage key. `sanitize` turns whatever was stored into a valid value. */
export function createStore<T>(key: string, sanitize: (raw: unknown) => T): Store<T> {
  let value = sanitize(readJSON(key));
  const listeners = new Set<() => void>();

  return {
    get: () => value,
    set(next) {
      const resolved = typeof next === 'function' ? (next as (prev: T) => T)(value) : next;
      if (Object.is(resolved, value)) return;
      value = resolved;
      writeJSON(key, value);
      listeners.forEach((listener) => listener());
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}

export function useStore<T>(store: Store<T>): T {
  return useSyncExternalStore(store.subscribe, store.get);
}
