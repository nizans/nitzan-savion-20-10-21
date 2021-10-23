import Navbar from "features/navbar/Navbar";
import Notifications from "features/notifications/Notifications";
import { useSetDefaultLocationByGEO } from "lib/reactQuery/query.hooks";
import useDarkMode from "hooks/useDarkMode";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "routes/AppRoutes";

//TODO -- ERRORS HANDLING

function App() {
  useSetDefaultLocationByGEO();
  useDarkMode();

  return (
    <Router>
      <Navbar />
      <div className="w-full flex bg-light dark:bg-dark-lighter">
        <div style={{ minHeight: "calc(100vh - 64px)" }} className="w-full mx-auto">
          <AppRoutes />
          <Notifications />
        </div>
      </div>
    </Router>
  );
}

export default App;
