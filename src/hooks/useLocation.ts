import { useState, useEffect, useCallback } from 'react';
import {
  UserLocation,
  LocationHeaders,
  LocationMetadata,
  fetchUserLocation,
  getLocationHeaders,
  getLocationMetadata,
  DEFAULT_LOCATION,
} from '../services/locationService';

export interface UseLocationResult {
  location: UserLocation | null;
  loading: boolean;
  error: Error | null;
  refreshLocation: () => Promise<UserLocation>;
  getHeaders: () => LocationHeaders;
  getMetadata: () => LocationMetadata;
}

/**
 * Custom React hook for accessing user IP and location information.
 */
export const useLocation = (): UseLocationResult => {
  const [location, setLocation] = useState<UserLocation | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const loadLocation = useCallback(async (forceRefresh = false) => {
    setLoading(true);
    setError(null);
    try {
      const locData = await fetchUserLocation(forceRefresh);
      setLocation(locData);
      return locData;
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error(String(err));
      setError(errorObj);
      setLocation(DEFAULT_LOCATION);
      return DEFAULT_LOCATION;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadLocation(false);
  }, [loadLocation]);

  const refreshLocation = useCallback(async () => {
    return loadLocation(true);
  }, [loadLocation]);

  const getHeaders = useCallback(() => {
    return getLocationHeaders(location);
  }, [location]);

  const getMetadata = useCallback(() => {
    return getLocationMetadata(location);
  }, [location]);

  return {
    location,
    loading,
    error,
    refreshLocation,
    getHeaders,
    getMetadata,
  };
};

export default useLocation;
