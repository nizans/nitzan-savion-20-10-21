# Weather App

A React weather app, using [AccuWeather](https://developer.accuweather.com/) API.

Preview: [https://nizans.github.io/weather-app/](https://nizans.github.io/weather-app/)

### **Local Installation**

Clone the repo, run `npm install`, provide env vars:

```
REACT_APP_ACCU_API_KEY=<apikey>
REACT_APP_GOOGLE_API_KEY=<apikey>
REACT_APP_PROXY_SERVER_PREFIX=<proxy-server-url - optional>
REACT_APP_USE_MOCK=<'true' - optional>
```

and run `npm start`

### **Explanations**

<details>
<summary>
    React Query    
</summary>

React Query makes all the API requests in the app, using a custom hook that wraps the useQuery hook for each request. The hooks are located in the [query.hooks.js](https://github.com/nizans/weather-app/blob/main/src/lib/reactQuery/query.hooks.js) file.

Some of the hooks are doing extra logic, for example:

- [useFetchLocationPhoto](https://github.com/nizans/weather-app/blob/a4e7d5cbd1ee68911b2826982d0bb2c14e2c403d/src/lib/reactQuery/query.hooks.js#L85) - gets the location name, then uses it to get the location photo
- [useSetDefaultLocationByGEO](https://github.com/nizans/weather-app/blob/a4e7d5cbd1ee68911b2826982d0bb2c14e2c403d/src/lib/reactQuery/query.hooks.js#L57) - gets the location and then updates the [defaultLocation](https://github.com/nizans/weather-app/blob/main/src/features/fiveDayForecast/defaultLocation.slice.js) state

The queries use the custom [\_fetch](https://github.com/nizans/weather-app/blob/a4e7d5cbd1ee68911b2826982d0bb2c14e2c403d/src/lib/reactQuery/query.function.js#L8) function, which wraps the fetch API.

The hooks pass the errors the may occur to the [queryErrorHandler](https://github.com/nizans/weather-app/blob/a4e7d5cbd1ee68911b2826982d0bb2c14e2c403d/src/lib/reactQuery/query.error.js#L17) by default.

Query keys are defined in the [query.keys.js](https://github.com/nizans/weather-app/blob/main/src/lib/reactQuery/query.keys.js) file.

</details>

<details>
<summary>
Redux
</summary>

Redux manages the app state, which includes the [theme](https://github.com/nizans/weather-app/blob/main/src/features/theme/theme.slice.js), [favorites](https://github.com/nizans/weather-app/blob/main/src/features/favorites/Favorites.slice.js), [defaultLocation](https://github.com/nizans/weather-app/blob/main/src/features/fiveDayForecast/defaultLocation.slice.js), and [notifications](https://github.com/nizans/weather-app/blob/main/src/features/notifications/notifications.slice.js).

A [subscriber](https://github.com/nizans/weather-app/blob/a4e7d5cbd1ee68911b2826982d0bb2c14e2c403d/src/store/store.js#L18) persists the theme and favorites data to local storage, which the store tries to load when initiated.

Examples:

- The app [fires](https://github.com/nizans/weather-app/blob/a4e7d5cbd1ee68911b2826982d0bb2c14e2c403d/src/features/notifications/Notifications.js#L25) a toast when a [notification object](https://github.com/nizans/weather-app/blob/main/src/features/notifications/notifications.model.js) is added to the notifications array and dismisses it when removed (e.g., [addNotification](https://github.com/nizans/weather-app/blob/a4e7d5cbd1ee68911b2826982d0bb2c14e2c403d/src/features/searchInput/SearchInput.js#L22)).

- The app home page shows the [weather forecast](https://github.com/nizans/weather-app/blob/a4e7d5cbd1ee68911b2826982d0bb2c14e2c403d/src/features/fiveDayForecast/FiveDayForecastWrapper.js#L12) of the current [defaultLocation](https://github.com/nizans/weather-app/blob/main/src/features/fiveDayForecast/defaultLocation.slice.js)

</details>

<details>
<summary>
Why did I used a proxy server ?
</summary>

During development, I ran into some CORS issues while fetching from Google API and found this [quick fix](https://github.com/Rob--W/cors-anywhere/).

</details>

### **Technologies and Libraries**

- React
- React-Router
- Tailwindcss & Headless UI - design and UI components
- Redux & Redux Toolkit - state management
- React Query - handles all API requests
- [react-icons](https://react-icons.github.io/react-icons/)

### **Bibliography**

- [React Query Docs](https://react-query.tanstack.com/overview)
- [React Redux Docs](https://react-redux.js.org/tutorials/quick-start)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/introduction/getting-started)
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
- [AccuWeather API](https://developer.accuweather.com/apis)
