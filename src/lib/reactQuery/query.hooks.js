import URLs from "constants/URLs";
import { setDefaultLocation } from "features/home/Home.slice";
import { _fetch } from "lib/reactQuery/query.function";
import { QUERY_KEYS } from "lib/reactQuery/query.keys";
import { defaultQuerySettings } from "lib/reactQuery/query.settings";
import { useEffect } from "react";
import { useQueries, useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import useCurrentLocation from "hooks/useCurrentLocation";
import TLV_FORECAST_MOCK from "mock/tlv_forecast.json";
import { USE_MOCK } from "constants/vars";
import TLV_NOW from "mock/tlv_now.json";
export const useFetchMultipleCurrentConditions = locationKeysArray => {
  return useQueries(
    locationKeysArray.map(key => {
      return {
        ...defaultQuerySettings,
        initialData: USE_MOCK ? TLV_NOW : undefined,
        queryKey: [...QUERY_KEYS.ACCU_CONDOTIONS, key],
        queryFn: () => _fetch(QUERY_KEYS.ACCU_CONDOTIONS, URLs.getCurrentConditionsURL(key)),
      };
    })
  );
};

export const useGetCurrectConditions = locationKey => {
  const queryClient = useQueryClient();
  return queryClient.getQueryState([...QUERY_KEYS.ACCU_CONDOTIONS, locationKey], {
    exact: true,
  });
};

export const useFetchFiveDaysForecast = (locationKey, metric = true) => {
  return useQuery(
    [...QUERY_KEYS.ACCU_FORECAST, locationKey],
    () => _fetch(QUERY_KEYS.ACCU_FORECAST, URLs.getFiveDayForcastURL(locationKey, metric)),
    {
      ...defaultQuerySettings,
      enabled: !!locationKey,
      initialData: USE_MOCK ? TLV_FORECAST_MOCK : undefined,
    }
  );
};

export const useFetchSearchByCity = cityName => {
  return useQuery([...QUERY_KEYS.ACCU_SEARCH, cityName], () => _fetch(QUERY_KEYS.ACCU_SEARCH, URLs.getAutoCompleteURL(cityName)), {
    ...defaultQuerySettings,
    enabled: cityName !== "" && cityName.length > 2,
  });
};

export const useSetDefaultLocationByGEO = () => {
  const dispatch = useDispatch();
  const { location } = useCurrentLocation();
  const { latitude, longitude } = location;
  const { isSuccess, data } = useQuery(
    [...QUERY_KEYS.ACCU_SEARCH, latitude, longitude],
    () => _fetch(QUERY_KEYS.ACCU_SEARCH, URLs.getGeoSearchURL(latitude, longitude)),
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

export const useFetchLocationPhoto = (cityName, countryName, maxWidth = 3840) => {
  const { data: place } = useQuery(
    [...QUERY_KEYS.GOOGLE_PLACE, cityName, countryName],
    () => _fetch(QUERY_KEYS.GOOGLE_PLACE, URLs.getGooglePlacesURL(cityName + " " + countryName)),
    defaultQuerySettings
  );

  const photoRef = place?.candidates[0]?.photos[0].photo_reference;
  const queryResult = useQuery(
    [...QUERY_KEYS.GOOGLE_PHOTO, cityName, countryName, maxWidth],
    () => _fetch(QUERY_KEYS.GOOGLE_PHOTO, URLs.getGooglePlacePhotoURL(photoRef, maxWidth)),
    {
      ...defaultQuerySettings,
      enabled: !!photoRef,
    }
  );

  return queryResult;
};
