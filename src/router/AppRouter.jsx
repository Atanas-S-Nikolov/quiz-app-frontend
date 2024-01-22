import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import HomePage from "@/pages/HomePage";

import { HOME_URL } from "@/constants/UrlConstants";


export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={HOME_URL} element={<HomePage />}/>
    </>
  )
)
