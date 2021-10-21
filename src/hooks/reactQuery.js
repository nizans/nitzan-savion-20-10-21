import {
  getAutoCompleteURL,
  getCurrentConditionsURL,
  getFiveDayForcastURL,
  getGeoSearchURL,
  getGooglePlacePhotoURL,
  getGooglePlacesURL,
} from 'constants/URLs';
import { useEffect } from 'react';
import { useQueries, useQuery, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { setLocation } from 'store/defaultLocationSlice';
import useCurrentLocation from './useCurrentLocation';

const defualtQuerySettings = {};

const defaultRequestOptions = {
  mode: 'cors',
  method: 'GET',
  headers: new Headers({ 'Accept-Encoding': 'gzip' }),
};

export const useFetchMultipleCurrentConditions = (locationKeysArray) => {
  return useQueries(
    locationKeysArray.map((key) => {
      return {
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

export const useFetchFiveDaysForecast = (locationKey, metric = true) =>
  useQuery(
    ['fiveDaysForecast', locationKey],
    () => _fetch(getFiveDayForcastURL(locationKey, metric)),
    defualtQuerySettings
  );

export const useFetchSearchByCity = (cityName) =>
  useQuery(
    ['search', cityName],
    () => _fetch(getAutoCompleteURL(cityName)),
    defualtQuerySettings
  );

export const useFetchByGEOLocation = () => {
  const dispatch = useDispatch();
  const { location } = useCurrentLocation();
  const { latitude, longitude } = location;
  const { isSuccess, data } = useQuery(
    ['search', latitude, longitude],
    () => _fetch(getGeoSearchURL(latitude, longitude)),
    {
      ...defualtQuerySettings,
      enabled: !!location.latitude && !!location.longitude,
    }
  );

  useEffect(() => {
    if (isSuccess && data) {
      const { Key, Country, EnglishName } = data;
      dispatch(
        setLocation({
          key: Key,
          cityName: EnglishName,
          countryName: Country.EnglishName,
        })
      );
    }
  }, [isSuccess, data]);
};

export const useFetchLocationPhoto = (
  cityName,
  countryName,
  maxWidth = 1024
) => {
  const { data: place, error } = useQuery(
    ['googlePlace', cityName, countryName],
    () =>
      _fetch(getGooglePlacesURL(cityName + ' ' + countryName), {
        ...defaultRequestOptions,
      })
  );

  const photoRef = place?.candidates[0]?.photos[0].photo_reference;

  return useQuery(
    ['photo', photoRef],
    () => _fetch(getGooglePlacePhotoURL(photoRef, maxWidth)),
    { ...defualtQuerySettings, enabled: !!photoRef }
  );
};

const _fetch = async (url, options = defaultRequestOptions) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      console.log(response.status);
      throw new Error('Error while fetching data...');
    }
    if (response.status === 204) return;
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
