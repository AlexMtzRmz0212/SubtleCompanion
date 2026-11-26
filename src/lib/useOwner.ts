import { createStore, useStore } from './store';

/**
 * SHA-256 of the owner password, so the password itself is not in the source. This only hides the
 * notes panel: the site is static, so anyone who reads the code can get past it.
 */
const PASSWORD_HASH = '2413fb3709b05939f04cf2e92f7d0897fc2596f9ad0b8a9ea855c7bfebaae892';

const ownerStore = createStore<boolean>('subtleart.owner', (raw) => raw === true);

async function sha256(text: string) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

export type LoginResult = 'ok' | 'wrong' | 'insecure';

export async function logIn(password: string): Promise<LoginResult> {
  // `crypto.subtle` only exists on https pages and localhost.
  if (!globalThis.crypto?.subtle) return 'insecure';
  if ((await sha256(password)) !== PASSWORD_HASH) return 'wrong';
  ownerStore.set(true);
  return 'ok';
}

export function logOut() {
  ownerStore.set(false);
}

export function useIsOwner() {
  return useStore(ownerStore);
}
