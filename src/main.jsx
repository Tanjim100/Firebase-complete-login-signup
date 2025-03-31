import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componentes/Root/Root.jsx';
import Home from './componentes/Home/Home.jsx';
import Login from './componentes/Login/Login.jsx';
import SignUp from './componentes/SignUp/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Orders from './componentes/Orders/Orders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Profile from './componentes/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/orders",
        element: <PrivateRoute><Orders /></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
