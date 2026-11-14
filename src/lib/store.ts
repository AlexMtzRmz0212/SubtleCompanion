import { useSyncExternalStore } from 'react';
import { readJSON, writeJSON } from './storage';

export type SaveStatus = 'saved' | 'pending' | 'failed';

export interface Store<T> {
  get(): T;
  set(next: T | ((prev: T) => T)): void;
  subscribe(listener: () => void): () => void;
  status(): SaveStatus;
}

const WRITE_DELAY_MS = 400;
const flushers: (() => void)[] = [];

/**
 * A value kept in memory and mirrored to one localStorage key. Updates reach the screen at once;
 * the write to disk waits for a pause in typing, and is forced when the page is hidden or closed.
 */
export function createStore<T>(key: string, sanitize: (raw: unknown) => T): Store<T> {
  let value = sanitize(readJSON(key));
  let status: SaveStatus = 'saved';
  let timer: number | undefined;
  const listeners = new Set<() => void>();
  const emit = () => listeners.forEach((l) => l());

  const flush = () => {
    if (timer === undefined) return;
    clearTimeout(timer);
    timer = undefined;
    status = writeJSON(key, value) ? 'saved' : 'failed';
    emit();
  };
  flushers.push(flush);

  return {
    get: () => value,
    set(next) {
      const resolved = typeof next === 'function' ? (next as (prev: T) => T)(value) : next;
      if (Object.is(resolved, value)) return;
      value = resolved;
      status = 'pending';
      clearTimeout(timer);
      timer = window.setTimeout(flush, WRITE_DELAY_MS);
      emit();
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    status: () => status,
  };
}

// One pair of listeners for every store, so nothing typed in the last moments is lost.
const flushAll = () => flushers.forEach((f) => f());
window.addEventListener('pagehide', flushAll);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') flushAll();
});

/**
 * Subscribes to one part of a store. `select` must return a primitive or a reference that only
 * changes when the data does, so a component re-renders only for the part it shows.
 */
export function useStoreValue<T, S>(store: Store<T>, select: (value: T) => S): S {
  return useSyncExternalStore(store.subscribe, () => select(store.get()));
}

export function useSaveStatus<T>(store: Store<T>): SaveStatus {
  return useSyncExternalStore(store.subscribe, store.status);
}

export function asStringRecord(raw: unknown): Record<string, string> {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) return {};
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) if (typeof v === 'string' && v !== '') out[k] = v;
  return out;
}

export function asStringList(raw: unknown): string[] {
  return Array.isArray(raw) ? [...new Set(raw.filter((v): v is string => typeof v === 'string'))] : [];
}
