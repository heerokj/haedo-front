import { createBrowserRouter } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import Home from "../pages/home/Home";
import { Login } from "../pages/auth/Login";
import DashBoard from "../pages/dashboard/DashBoard";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "", element: <Home /> },
      { path: RoutePaths.LOGIN, element: <Login /> },
      { path: RoutePaths.DASHBOARD, element: <DashBoard /> },
    ],
  },
]);
