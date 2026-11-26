import { createStore, useStore } from './store';

/** The section for notes that belong to no chapter. Every other section id is a chapter id. */
export const GENERAL = 'general';

export interface Note {
  id: string;
  /** `GENERAL` or a chapter id. */
  section: string;
  text: string;
  /** ISO date and time the note was written. */
  createdAt: string;
}

function sanitizeNotes(raw: unknown): Note[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter(
    (n): n is Note =>
      typeof n?.id === 'string' &&
      typeof n.section === 'string' &&
      typeof n.text === 'string' &&
      typeof n.createdAt === 'string',
  );
}

const notesStore = createStore<Note[]>('subtleart.notes', sanitizeNotes);
const panelStore = createStore<boolean>('subtleart.notes-open', (raw) => raw !== false);

export function addNote(section: string, text: string) {
  const note: Note = {
    id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`,
    section,
    text,
    createdAt: new Date().toISOString(),
  };
  notesStore.set((list) => [...list, note]);
}

export function editNote(id: string, text: string) {
  notesStore.set((list) => list.map((n) => (n.id === id ? { ...n, text } : n)));
}

export function deleteNote(id: string) {
  notesStore.set((list) => list.filter((n) => n.id !== id));
}

export function useNotes() {
  return useStore(notesStore);
}

export function setNotesOpen(open: boolean) {
  panelStore.set(open);
}

export function useNotesOpen() {
  return useStore(panelStore);
}
