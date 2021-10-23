export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const PROXY_SERVER_PREFIX = process.env.REACT_APP_PROXY_SERVER_PREFIX || "";
export const USE_MOCK = process.env.REACT_APP_USE_MOCK === "true";
export const ACCU_API_KEY = USE_MOCK ? "" : process.env.REACT_APP_ACCU_API_KEY;
export const IS_DEV = process.env.NODE_ENV === "development";
