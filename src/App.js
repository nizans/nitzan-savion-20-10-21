import Navbar from 'features/header/Navbar';
import { useFetchByGEOLocation } from 'hooks/reactQuery';
import useCurrentLocation from 'hooks/useCurrentLocation';
import useSetCurrentLocation from 'hooks/useSetCurrentLocation';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from 'routes/AppRoutes';
import { setLocation } from 'store/defaultLocationSlice';

function App() {
  //useFetchByGEOLocation();
  return (
    <>
      <Router>
        <Navbar />
        <div
          style={{ height: 'calc(100vh - 64px)' }}
          className="container px-2 sm:px-0 mx-auto"
        >
          <AppRoutes />
        </div>
      </Router>
    </>
  );
}

export default App;
