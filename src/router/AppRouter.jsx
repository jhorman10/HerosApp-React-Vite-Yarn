import { Route, Routes } from 'react-router-dom';

import { LoginPage, RegisterPage } from '../auth';
import { HerosRoutes } from '../heros';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoutes>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HerosRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};
