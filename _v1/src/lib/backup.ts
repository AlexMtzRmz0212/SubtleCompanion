import { chapters } from '../data/chapters';
import { asStringList } from './store';
import { highlightsStore, itemKey, notesStore, sanitizeNotes, type NotesState } from './useNotes';
import { progressStore } from './useProgress';

const APP_ID = 'subtle-art-companion';

export interface ChapterEntries {
  highlights: { key: string; text: string }[];
  answers: { question: string; text: string }[];
  note: string;
}

/** What the reader saved in one chapter. Shared by the notes page and the text export. */
export function entriesFor(chapterIndex: number, notes: NotesState, highlights: string[]): ChapterEntries {
  const chapter = chapters[chapterIndex];
  const saved = new Set(highlights);
  return {
    highlights: chapter.keyIdeas.flatMap((text, i) => {
      const key = itemKey(chapter.id, i);
      return saved.has(key) ? [{ key, text }] : [];
    }),
    answers: chapter.reflection.flatMap((question, i) => {
      const text = notes.answers[itemKey(chapter.id, i)];
      return text ? [{ question, text }] : [];
    }),
    note: notes.notes[chapter.id] ?? '',
  };
}

export const isEmpty = (e: ChapterEntries) => !e.highlights.length && !e.answers.length && !e.note;

/** Everything the reader saved, as plain text to paste into another app. */
export function notesAsText(notes: NotesState, highlights: string[]): string {
  const parts = ['# The Subtle Art of Not Giving a F*ck: my notes'];
  chapters.forEach((chapter, i) => {
    const e = entriesFor(i, notes, highlights);
    if (isEmpty(e)) return;
    parts.push(`## ${chapter.n}. ${chapter.title}`);
    if (e.highlights.length) parts.push(['Highlights', ...e.highlights.map((h) => `- ${h.text}`)].join('\n'));
    for (const a of e.answers) parts.push(`Q: ${a.question}\nA: ${a.text}`);
    if (e.note) parts.push(`Notes\n${e.note}`);
  });
  return parts.join('\n\n') + '\n';
}

export function downloadBackup() {
  const data = {
    app: APP_ID,
    version: 1,
    exportedAt: new Date().toISOString(),
    notes: notesStore.get(),
    highlights: highlightsStore.get(),
    progress: progressStore.get(),
  };
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `subtle-art-notes-${data.exportedAt.slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

export interface Backup {
  notes: NotesState;
  highlights: string[];
  progress: string[];
}

/** Returns null when the text is not a backup made by this app. */
export function parseBackup(text: string): Backup | null {
  try {
    const raw = JSON.parse(text) as Record<string, unknown> | null;
    if (!raw || raw.app !== APP_ID) return null;
    return {
      notes: sanitizeNotes(raw.notes),
      highlights: asStringList(raw.highlights),
      progress: asStringList(raw.progress),
    };
  } catch {
    return null;
  }
}

export function restoreBackup(backup: Backup) {
  notesStore.set(backup.notes);
  highlightsStore.set(backup.highlights);
  progressStore.set(backup.progress);
}
