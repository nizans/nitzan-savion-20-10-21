import { useEffect, useState } from 'react';
import storage from 'utils/storage';
const L_STORAGE_PREFIX = 'herolo_task_';
const useLocalStorage = (key, initialValue) => {
  key = L_STORAGE_PREFIX + key;
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = storage.get(key);
      return item || initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const clear = () => {
    storage.clear(key);
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: key,
      })
    );
  };

  const setValue = value => {
    try {
      storage.set(key, value);
      setStoredValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.addEventListener('storage', onLocalStorageChange);
    return () => {
      window.addEventListener('storage', onLocalStorageChange);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //check if same value after storage event
  const onLocalStorageChange = e => {
    if (e.key === key) {
      if (storedValue !== storage.get(key)) {
        setStoredValue(initialValue);
      }
    }
  };

  return [storedValue, setValue, clear];
};

export default useLocalStorage;
