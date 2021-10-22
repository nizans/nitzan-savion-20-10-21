import { useEffect, useState } from 'react';

const options = {
  enableHighAccuracy: false,
  timeout: 1000 * 60 * 1,
  maximumAge: 1000 * 3600 * 3,
};

const useCurrentLocation = () => {
  const [error, setError] = useState();
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { coords } = position;
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        setError(error);
      },
      options
    );
  }, []);

  return { location, error };
};

export default useCurrentLocation;
