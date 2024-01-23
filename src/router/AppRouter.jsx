import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "@/constants/RouteConstants";

import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";


export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={HOME_ROUTE} element={<HomePage />} />
      <Route path={LOGIN_ROUTE} element={<LoginPage />} />
      <Route path={REGISTER_ROUTE} element={<RegisterPage />} />
    </>
  )
)
