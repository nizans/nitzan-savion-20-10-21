import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLocation } from 'store/defaultLocationSlice';
import { useFetchByGEOLocation } from './reactQuery';
import useCurrentLocation from './useCurrentLocation';

const useSetCurrentLocation = () => {
  const { location, error } = useCurrentLocation();

  const {} = useFetchByGEOLocation();


  return { location, error };
};

export default useSetCurrentLocation;
