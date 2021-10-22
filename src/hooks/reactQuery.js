import {
  getAutoCompleteURL,
  getCurrentConditionsURL,
  getFiveDayForcastURL,
  getGeoSearchURL,
  getGooglePlacePhotoURL,
  getGooglePlacesURL,
} from 'constants/URLs';

import { setDefaultLocation } from 'features/home/Home.slice';
import { useEffect } from 'react';
import { useQueries, useQuery, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import useCurrentLocation from './useCurrentLocation';

const defaultRequestOptions = {
  method: 'GET',
  headers: new Headers({ 'Accept-Encoding': 'gzip' }),
};

const defaultQuerySettings = {
  retry: 1,
  staleTime: Infinity,
  refetchInterval: 0,
  cacheTime: Infinity,
};

export const useFetchMultipleCurrentConditions = (locationKeysArray) => {
  return useQueries(
    locationKeysArray.map((key) => {
      return {
        ...defaultQuerySettings,
        queryKey: ['currentConditions', key],
        queryFn: () => _fetch(getCurrentConditionsURL(key)),
      };
    })
  );
};

export const useGetCurrectCondotions = (locationKey) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryState(['currentConditions', locationKey], {
    exact: true,
  });
};

export const useFetchFiveDaysForecast = (locationKey, metric = true) => {
  return useQuery(
    ['fiveDaysForecast', locationKey],
    () => _fetch(getFiveDayForcastURL(locationKey, metric)),
    { ...defaultQuerySettings, enabled: !!locationKey }
  );
};

export const useFetchSearchByCity = (cityName) => {
  return useQuery(
    ['search', cityName],
    () => _fetch(getAutoCompleteURL(cityName)),
    { ...defaultQuerySettings, enabled: cityName !== '' && cityName.length > 2 }
  );
};

export const useSetDefaultLocationByGEO = () => {
  const dispatch = useDispatch();
  const { location } = useCurrentLocation();
  const { latitude, longitude } = location;
  const { isSuccess, data } = useQuery(
    ['search', latitude, longitude],
    () => _fetch(getGeoSearchURL(latitude, longitude)),
    {
      ...defaultQuerySettings,
      enabled: !!location.latitude && !!location.longitude,
    }
  );
  useEffect(() => {
    if (isSuccess && data) {
      const { Key, Country, EnglishName } = data;
      dispatch(
        setDefaultLocation({
          key: Key,
          cityName: EnglishName,
          countryName: Country.EnglishName,
          image: null,
        })
      );
    }
  }, [isSuccess, data, dispatch]);
};

export const useFetchLocationPhoto = (
  cityName,
  countryName,
  maxWidth = 3840
) => {
  const { data: place } = useQuery(
    ['googlePlace', cityName, countryName],
    () => _fetch(getGooglePlacesURL(cityName + ' ' + countryName)),
    defaultQuerySettings
  );

  const photoRef = place?.candidates[0]?.photos[0].photo_reference;
  const queryResult = useQuery(
    ['photo', cityName, countryName],
    () => _fetch(getGooglePlacePhotoURL(photoRef, maxWidth)),
    {
      ...defaultQuerySettings,
      enabled: !!photoRef,
    }
  );

  return queryResult;
};

const _fetch = async (url, options = defaultRequestOptions) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    let error;
    if (response.headers.get('Content-Type') === 'application/json') {
      const serverError = await response.json();
      error = Error(serverError);
    }
    error = Error('Error while fetching data...');
    throw error;
  }

  if (response.headers.get('Content-Type') === 'image/jpeg')
    return await response.blob();

  if (response.status === 204) return;

  return await response.json();
};
