import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box } from '@mui/material';
import './App.css';


function App() {
  return (

    <Box className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <ToastContainer />

        <BrowserRouter>



          <Routes>
            <Route
              path={routes.signin.path}
              element={<routes.signin.element />}
            />
            <Route
              path={routes.signup.path}
              element={<routes.signup.element />}
            />
            <Route path={routes.customer.path}
              element={<routes.customer.element />} />

            <Route
              path={routes.main.path}
              element={<routes.main.element />}
            />
            <Route
              path={routes.home.path}
              element={<Navigate to={`${routes.main.path}`} />}
            />
            <Route
              path={routes.invalid.path}
              element={<Navigate to={`${routes.main.path}`} />}
            />
          </Routes>



        </BrowserRouter>
      </Suspense>
    </Box>
  );
}

export default App;
