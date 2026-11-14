import { asStringList, createStore, useStoreValue } from './store';

/** Ids of the visuals saved as favourites. */
export const savedStore = createStore<string[]>('subtleart.saved', asStringList);

export function toggleSaved(visualId: string) {
  savedStore.set((list) => (list.includes(visualId) ? list.filter((id) => id !== visualId) : [...list, visualId]));
}

export function useIsSaved(visualId: string) {
  return useStoreValue(savedStore, (list) => list.includes(visualId));
}

export function useSavedIds() {
  return useStoreValue(savedStore, (list) => list);
}
