import { getLocationHeaders, LocationHeaders } from './locationService';

export interface AxiosRequestConfigLike {
  headers?: Record<string, any>;
  [key: string]: any;
}

export interface AxiosInstanceLike {
  interceptors: {
    request: {
      use: (
        onFulfilled?: (
          config: AxiosRequestConfigLike
        ) => AxiosRequestConfigLike | Promise<AxiosRequestConfigLike>,
        onRejected?: (error: any) => any
      ) => number;
    };
  };
}

/**
 * Attaches a request interceptor to an Axios instance (or global axios object)
 * to automatically include custom x-user-* location headers on outgoing requests.
 *
 * @param axiosInstance The Axios instance to intercept.
 * @returns Interceptor ID if attached successfully, or null.
 */
export const attachLocationInterceptor = (
  axiosInstance?: AxiosInstanceLike
): number | null => {
  if (
    !axiosInstance ||
    !axiosInstance.interceptors ||
    !axiosInstance.interceptors.request
  ) {
    console.warn(
      '[AxiosInterceptor] No valid Axios instance provided to attachLocationInterceptor.'
    );
    return null;
  }

  return axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfigLike) => {
      const locationHeaders: LocationHeaders = getLocationHeaders();

      if (!config.headers) {
        config.headers = {};
      }

      Object.entries(locationHeaders).forEach(([key, value]) => {
        if (value && !config.headers[key]) {
          config.headers[key] = value;
        }
      });

      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );
};
