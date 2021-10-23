import { queryErrorHandler } from "./query.error";

export const defaultQuerySettings = {
  retry: 0,
  staleTime: Infinity,
  refetchInterval: 0,
  cacheTime: Infinity,
  onError: queryErrorHandler,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
};
