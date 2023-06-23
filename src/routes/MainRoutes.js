import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CreatePage from "../pages/CreatePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FavoritePage from "../pages/FavoritePage";
import SearchPage from "../pages/SearchPage";
import PictureDetails from "../pages/PictureDetails";
import NotFoundPage from "../pages/NotFoundPage";
import AboutUsPage from "../pages/AboutUsPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/create", element: <CreatePage />, id: 2 },
    { link: "/login", element: <LoginPage />, id: 3 },
    { link: "/register", element: <RegisterPage />, id: 4 },
    { link: "/favorite", element: <FavoritePage />, id: 5 },
    { link: "/search", element: <SearchPage />, id: 6 },
    { link: "/details/:id", element: <PictureDetails />, id: 7 },
    { link: "*", element: <NotFoundPage />, id: 8 },
    { link: "/aboutus", element: <AboutUsPage />, id: 9 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
