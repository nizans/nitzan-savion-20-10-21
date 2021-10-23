const L_STORAGE_PREFIX = "herolo_task_";
const storage = {
  has: key => {
    return !(window.localStorage.getItem(L_STORAGE_PREFIX + key) === null);
  },
  get: key => {
    const value = JSON.parse(window.localStorage.getItem(L_STORAGE_PREFIX + key));
    return value || undefined;
  },
  set: (key, value) => {
    window.localStorage.setItem(L_STORAGE_PREFIX + key, JSON.stringify(value));
  },
  clear: key => {
    window.localStorage.removeItem(L_STORAGE_PREFIX + key);
  },
};

export default storage;
