import React from "react";
import { Outlet } from "react-router-dom";
import "./maincontent.scss";

export const MainContentUser = () => {
  return (
    <div className="__container">
      <Outlet />
    </div>
  );
};

export const MainContentAdmin = () => {
  return <div className="__container">MainContent Admin</div>;
};
