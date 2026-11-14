import { asStringList, createStore, useStoreValue } from './store';

/** Ids of the chapters marked as read. */
export const progressStore = createStore<string[]>('subtleart.progress', asStringList);

export function setRead(chapterId: string, read: boolean) {
  progressStore.set((list) => {
    const has = list.includes(chapterId);
    if (has === read) return list;
    return read ? [...list, chapterId] : list.filter((id) => id !== chapterId);
  });
}

export function useIsRead(chapterId: string) {
  return useStoreValue(progressStore, (list) => list.includes(chapterId));
}

export function useReadIds() {
  return useStoreValue(progressStore, (list) => list);
}
