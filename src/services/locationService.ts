import {
  UserLocation,
  getStoredLocation,
  setStoredLocation,
} from '../utils/storage';

export type { UserLocation };

export interface LocationHeaders extends Record<string, string> {
  'x-user-ip': string;
  'x-user-country': string;
  'x-user-region': string;
  'x-user-city': string;
  'x-user-timezone': string;
  'x-user-latitude': string;
  'x-user-longitude': string;
  'x-user-isp': string;
}

export interface LocationMetadata {
  ip: string | null;
  city: string | null;
  region: string | null;
  country: string | null;
  latitude: number | string | null;
  longitude: number | string | null;
  timezone: string | null;
  isp: string | null;
}

export const DEFAULT_LOCATION: UserLocation = {
  ip: null,
  city: null,
  region: null,
  region_code: null,
  country_name: null,
  country_code: null,
  postal: null,
  latitude: null,
  longitude: null,
  timezone: null,
  org: null,
  network: null,
};

let activeFetchPromise: Promise<UserLocation> | null = null;
let fetchInterceptorInstalled = false;

/**
 * Fetches location details from ipapi.co (or retrieves from session cache).
 * Guarantees single API call per session and handles deduplication for concurrent callers.
 */
export const fetchUserLocation = async (
  forceRefresh = false
): Promise<UserLocation> => {
  if (!forceRefresh) {
    const cached = getStoredLocation();
    if (cached) {
      return cached;
    }
  }

  // Deduplicate simultaneous call promises
  if (activeFetchPromise) {
    return activeFetchPromise;
  }

  activeFetchPromise = (async () => {
    try {
      const response = await fetch('https://ipapi.co/json/', {
        method: 'GET',
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error(
          `ipapi request failed with status ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();

      const locationData: UserLocation = {
        ip: data.ip || null,
        city: data.city || null,
        region: data.region || null,
        region_code: data.region_code || null,
        country_name: data.country_name || null,
        country_code: data.country_code || null,
        postal: data.postal || null,
        latitude: data.latitude ?? null,
        longitude: data.longitude ?? null,
        timezone: data.timezone || null,
        org: data.org || null,
        network: data.network || null,
      };

      setStoredLocation(locationData);
      return locationData;
    } catch (error) {
      console.warn(
        '[LocationService] Could not retrieve user location from ipapi.co:',
        error
      );
      // Fallback gracefully without blocking app or backend requests
      return getStoredLocation() || DEFAULT_LOCATION;
    } finally {
      activeFetchPromise = null;
    }
  })();

  return activeFetchPromise;
};

/**
 * Generates custom x-user-* HTTP headers from current location data.
 */
export const getLocationHeaders = (
  customLocation?: UserLocation | null
): LocationHeaders => {
  const location = customLocation || getStoredLocation() || DEFAULT_LOCATION;
  const isp = location.org || location.network || '';

  return {
    'x-user-ip': location.ip ? String(location.ip) : '',
    'x-user-country': location.country_name ? String(location.country_name) : '',
    'x-user-region': location.region ? String(location.region) : '',
    'x-user-city': location.city ? String(location.city) : '',
    'x-user-timezone': location.timezone ? String(location.timezone) : '',
    'x-user-latitude':
      location.latitude != null ? String(location.latitude) : '',
    'x-user-longitude':
      location.longitude != null ? String(location.longitude) : '',
    'x-user-isp': isp ? String(isp) : '',
  };
};

/**
 * Formats location data into a metadata object for inclusion in API body payloads.
 */
export const getLocationMetadata = (
  customLocation?: UserLocation | null
): LocationMetadata => {
  const location = customLocation || getStoredLocation() || DEFAULT_LOCATION;
  return {
    ip: location.ip,
    city: location.city,
    region: location.region,
    country: location.country_name,
    latitude: location.latitude,
    longitude: location.longitude,
    timezone: location.timezone,
    isp: location.org || location.network,
  };
};

/**
 * Installs a global native fetch interceptor to append location headers to all outgoing requests automatically.
 */
export const setupFetchInterceptor = (): void => {
  if (typeof window === 'undefined' || fetchInterceptorInstalled) return;

  const originalFetch = window.fetch;

  window.fetch = async function (
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<Response> {
    const urlString =
      typeof input === 'string'
        ? input
        : input instanceof URL
        ? input.href
        : input.url;

    // Do not attach location headers to ipapi itself to avoid circular calls
    if (urlString && urlString.includes('ipapi.co')) {
      return originalFetch.call(window, input, init);
    }

    // Ensure location data is loaded/cached before sending the request
    let locationData: UserLocation | null = getStoredLocation();
    if (!locationData) {
      try {
        locationData = await fetchUserLocation();
      } catch {
        locationData = DEFAULT_LOCATION;
      }
    }

    const locationHeaders = getLocationHeaders(locationData);
    const newInit: RequestInit = { ...init };

    const headers = new Headers(newInit.headers || {});

    Object.entries(locationHeaders).forEach(([key, value]) => {
      if (!headers.has(key)) {
        headers.set(key, value || 'null');
      }
    });

    newInit.headers = headers;

    return originalFetch.call(window, input, newInit);
  };

  fetchInterceptorInstalled = true;
};
