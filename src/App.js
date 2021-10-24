import { USE_MOCK } from "constants/vars";
import Navbar from "features/navbar/Navbar";
import Notifications from "features/notifications/Notifications";
import useDarkMode from "hooks/useDarkMode";
import { useSetDefaultLocationByGEO } from "lib/reactQuery/query.hooks";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "routes/AppRoutes";

function App() {
  useSetDefaultLocationByGEO();
  useDarkMode();

  return (
    <Router>
      <Navbar />
      <div className="w-full flex bg-light dark:bg-dark-lighter">
        <div style={{ minHeight: "calc(100vh - 64px)" }} className="w-full mx-auto pb-16">
          <AppRoutes />
          <Notifications />
        </div>
      </div>
      {USE_MOCK && (
        <span className="fixed bottom-0 left-0 right-0 bg-red-500 text-center font-bold text-white text-xl z-40">
          Using mock weather data. Remove USE_MOCK env var to fetch from API.
        </span>
      )}
    </Router>
  );
}

export default App;
