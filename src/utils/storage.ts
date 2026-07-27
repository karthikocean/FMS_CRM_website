/**
 * Utility functions to manage location data persistence using Web Storage API (sessionStorage)
 * with graceful in-memory fallback.
 */

export interface UserLocation {
  ip: string | null;
  city: string | null;
  region: string | null;
  region_code: string | null;
  country_name: string | null;
  country_code: string | null;
  postal: string | null;
  latitude: number | string | null;
  longitude: number | string | null;
  timezone: string | null;
  org: string | null;
  network: string | null;
}

const LOCATION_STORAGE_KEY = 'fc_user_location';

let memoryStorageCache: string | null = null;

/**
 * Retrieves cached location data from sessionStorage or memory fallback.
 */
export const getStoredLocation = (): UserLocation | null => {
  try {
    const storedValue =
      typeof window !== 'undefined' && window.sessionStorage
        ? sessionStorage.getItem(LOCATION_STORAGE_KEY)
        : memoryStorageCache;

    if (!storedValue) return null;
    return JSON.parse(storedValue) as UserLocation;
  } catch (error) {
    console.warn('[Storage] Failed to parse stored user location:', error);
    return null;
  }
};

/**
 * Saves user location data into sessionStorage and memory fallback.
 */
export const setStoredLocation = (location: UserLocation): void => {
  try {
    const serialized = JSON.stringify(location);
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem(LOCATION_STORAGE_KEY, serialized);
    }
    memoryStorageCache = serialized;
  } catch (error) {
    console.warn('[Storage] Failed to store user location:', error);
  }
};

/**
 * Clears cached user location data from storage.
 */
export const clearStoredLocation = (): void => {
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem(LOCATION_STORAGE_KEY);
    }
    memoryStorageCache = null;
  } catch (error) {
    console.warn('[Storage] Failed to clear user location:', error);
  }
};
