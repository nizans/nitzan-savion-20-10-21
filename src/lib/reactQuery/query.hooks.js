import URLs from "constants/URLs";
import { setDefaultLocation } from "features/fiveDayForecast/defaultLocation.slice";
import { _fetch } from "lib/reactQuery/query.function";
import { QUERY_KEYS } from "lib/reactQuery/query.keys";
import { defaultQuerySettings } from "lib/reactQuery/query.settings";
import { useEffect, useState } from "react";
import { useQueries, useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { USE_MOCK } from "constants/vars";
import useCurrentLocation from "hooks/useCurrentLocation";

import TLV_NOW from "mock/tlvCurrentConditionsResult.json";
import TLV_FORECAST_MOCK from "mock/tlvForecastResult.json";
import AUTOCOMPLE_T from "mock/autoCompleteTResult.json";
import GEO_LOC_RESULT from "mock/geoLocationResult.json";

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

export const useFetchForecast = (locationKey, metric = true) => {
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

export const useFetchAutocomplete = cityName => {
  return useQuery([...QUERY_KEYS.ACCU_SEARCH, cityName], () => _fetch(QUERY_KEYS.ACCU_SEARCH, URLs.getAutoCompleteURL(cityName)), {
    ...defaultQuerySettings,
    enabled: cityName !== "" && cityName.length > 2,
    initialData: USE_MOCK ? AUTOCOMPLE_T : undefined,
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
      initialData: USE_MOCK ? GEO_LOC_RESULT : null,
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
  const [photoRef, setPhotoRef] = useState(null);

  const { data: placeInfo } = useQuery(
    [...QUERY_KEYS.GOOGLE_PLACE, cityName, countryName],
    () => _fetch(QUERY_KEYS.GOOGLE_PLACE, URLs.getGooglePlacesURL(cityName + " " + countryName)),
    defaultQuerySettings
  );

  const placePhotoQuery = useQuery(
    [...QUERY_KEYS.GOOGLE_PHOTO, cityName, countryName],
    () => _fetch(QUERY_KEYS.GOOGLE_PHOTO, URLs.getGooglePlacePhotoURL(photoRef, maxWidth)),
    {
      ...defaultQuerySettings,
      enabled: !!photoRef,
    }
  );

  useEffect(() => {
    const candidate = placeInfo?.candidates[0];
    if (candidate?.photos) if (candidate.photos.length > 0) setPhotoRef(candidate.photos[0].photo_reference);
    if (placeInfo?.status === "ZERO_RESULTS") {
      placePhotoQuery.remove();
    }
  }, [placeInfo, placePhotoQuery]);

  return placePhotoQuery;
};
