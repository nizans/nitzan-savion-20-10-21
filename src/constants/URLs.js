const API_KEY = 'Ta2A30OlXxtpBaUtd0YGnimUsuodaGs7';
const GOOGLE_API_KEY = 'AIzaSyDpqwNPv7ZgeuidS9COJhuTovBuk5IVSRU';
const PROXY_SERVER_PREFIX = 'https://ancient-meadow-61245.herokuapp.com/';
export const getCurrentConditionsURL = (locationKey) =>
  `${PROXY_SERVER_PREFIX}http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}&details=true`;

export const getFiveDayForcastURL = (locationKey, metric) =>
  `${PROXY_SERVER_PREFIX}http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&details=true&metric=${metric}`;

export const getAutoCompleteURL = (searchStr) =>
  `${PROXY_SERVER_PREFIX}http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${searchStr}`;

export const getWeatherIconURL = (iconNumber) =>
  `${PROXY_SERVER_PREFIX}https://developer.accuweather.com/sites/default/files/${(
    '0' + iconNumber
  ).slice(-2)}-s.png`;

export const getGeoSearchURL = (lat, ion) =>
  `${PROXY_SERVER_PREFIX}http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${
    lat + ', ' + ion
  }&details=true`;

export const getGooglePlacesURL = (input) =>
  `${PROXY_SERVER_PREFIX}https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=photos&key=${GOOGLE_API_KEY}`;

export const getGooglePlacePhotoURL = (photoRef, maxWidth) =>
  `${PROXY_SERVER_PREFIX}https://maps.googleapis.com/maps/api/place/photo?key=${GOOGLE_API_KEY}&photo_reference=${photoRef}&maxwidth=${maxWidth}`;
