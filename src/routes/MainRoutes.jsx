import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MainLayout from "../layouts/MainLayout";
import NotFoundPage from "../pages/NotFoundPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Route>

      <Route path="/auth" element={<AuthPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
