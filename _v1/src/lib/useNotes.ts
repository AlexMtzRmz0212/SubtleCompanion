import { useCallback } from 'react';
import { asStringList, asStringRecord, createStore, useStoreValue } from './store';

export interface NotesState {
  /** Free notes, keyed by chapter id. */
  notes: Record<string, string>;
  /** Answers to reflection questions, keyed `ch03:1` (chapter id, question index). */
  answers: Record<string, string>;
}

export function sanitizeNotes(raw: unknown): NotesState {
  const obj = (typeof raw === 'object' && raw !== null ? raw : {}) as Record<string, unknown>;
  return { notes: asStringRecord(obj.notes), answers: asStringRecord(obj.answers) };
}

export const notesStore = createStore<NotesState>('subtleart.notes', sanitizeNotes);

/** Saved key ideas, as `ch03:1` (chapter id, idea index). */
export const highlightsStore = createStore<string[]>('subtleart.highlights', asStringList);

export const itemKey = (chapterId: string, index: number) => `${chapterId}:${index}`;

function withEntry(record: Record<string, string>, key: string, text: string) {
  const next = { ...record };
  if (text === '') delete next[key];
  else next[key] = text;
  return next;
}

export function useNote(chapterId: string) {
  const text = useStoreValue(notesStore, (s) => s.notes[chapterId] ?? '');
  const setText = useCallback(
    (value: string) => notesStore.set((s) => ({ ...s, notes: withEntry(s.notes, chapterId, value) })),
    [chapterId],
  );
  return [text, setText] as const;
}

export function useAnswer(key: string) {
  const text = useStoreValue(notesStore, (s) => s.answers[key] ?? '');
  const setText = useCallback(
    (value: string) => notesStore.set((s) => ({ ...s, answers: withEntry(s.answers, key, value) })),
    [key],
  );
  return [text, setText] as const;
}

export function toggleHighlight(key: string) {
  highlightsStore.set((list) => (list.includes(key) ? list.filter((k) => k !== key) : [...list, key]));
}

export function useIsHighlighted(key: string) {
  return useStoreValue(highlightsStore, (list) => list.includes(key));
}

const identity = <T,>(value: T) => value;
export const useAllNotes = () => useStoreValue(notesStore, identity);
export const useHighlights = () => useStoreValue(highlightsStore, identity);
