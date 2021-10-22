import Navbar from 'features/navbar/Navbar';
import Toast from 'features/notifications/Toast';
import { useSetDefaultLocationByGEO } from 'hooks/reactQuery';
import useDarkMode from 'hooks/useDarkMode';
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from 'routes/AppRoutes';

//TODO -- ERRORS HANDLING

function App() {
  useSetDefaultLocationByGEO();
  useDarkMode();
  return (
    <>
      <Router>
        <Navbar />
        <div className="w-full flex bg-light dark:bg-dark-lighter">
          <div
            style={{ minHeight: 'calc(100vh - 64px)' }}
            className="w-full mx-auto"
          >
            <AppRoutes />
            <Toast />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
