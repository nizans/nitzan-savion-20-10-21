import { ACCU_API_KEY, GOOGLE_API_KEY, PROXY_SERVER_PREFIX } from "./vars";

const ACCU_BASE_URL = "https://dataservice.accuweather.com/";
const GOOGLE_PLACE_BASE_URL = "https://maps.googleapis.com/maps/api/place/";
const URLs = {
  getCurrentConditionsURL: locationKey =>
    `${PROXY_SERVER_PREFIX}${ACCU_BASE_URL}currentconditions/v1/${locationKey}?apikey=${ACCU_API_KEY}&details=true`,

  getFiveDayForcastURL: (locationKey, metric) =>
    `${PROXY_SERVER_PREFIX}${ACCU_BASE_URL}forecasts/v1/daily/5day/${locationKey}?apikey=${ACCU_API_KEY}&details=true&metric=${metric}`,

  getAutoCompleteURL: searchStr => `${PROXY_SERVER_PREFIX}${ACCU_BASE_URL}locations/v1/cities/autocomplete?apikey=${ACCU_API_KEY}&q=${searchStr}`,

  getWeatherIconURL: iconNumber => `https://developer.accuweather.com/sites/default/files/${("0" + iconNumber).slice(-2)}-s.png`,

  getGeoSearchURL: (lat, ion) =>
    `${PROXY_SERVER_PREFIX}${ACCU_BASE_URL}locations/v1/cities/geoposition/search?apikey=${ACCU_API_KEY}&q=${lat + ", " + ion}&details=true`,

  getGooglePlacesURL: input =>
    `${PROXY_SERVER_PREFIX}${GOOGLE_PLACE_BASE_URL}findplacefromtext/json?input=${input}&inputtype=textquery&fields=photos&key=${GOOGLE_API_KEY}`,

  getGooglePlacePhotoURL: (photoRef, maxWidth) =>
    `${PROXY_SERVER_PREFIX}${GOOGLE_PLACE_BASE_URL}photo?key=${GOOGLE_API_KEY}&photo_reference=${photoRef}&maxwidth=${maxWidth}`,
};

export default URLs;
