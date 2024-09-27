import React, { ReactNode } from "react";
import { Refine } from '@refinedev/core';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from './Providers/AuthProvider.ts';
import { Login } from './Pages/Login/index.tsx';
import Dashboard from './Pages/Dashboard/Dashboard.tsx';

// Layout for the protected routes
const ProtectedLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
interface PrivateRouteProps {
  children: ReactNode;
}

// Private Route to protect dashboard
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("auth"); // returns true or false
  return isAuthenticated ? <>{children} </> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Refine
        authProvider={AuthProvider} // Make sure authProvider is correctly passed here
        resources={[{ name: "dashboard", list: Dashboard }]}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Protected Routes */}
          <Route element={<ProtectedLayout />}>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Route>
          {/* Default Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Refine>
    </BrowserRouter>
  );
}

export default App;
