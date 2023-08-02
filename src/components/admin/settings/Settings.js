import React from "react";
import "../../includes/panel.scss";
import "./settings.scss";
import { NavLink, Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <div className="__main">
      <div className="breadcrumb">
        <h1>Site Settings</h1>
        <div className="link">Home / Site Settings</div>
      </div>
      <div className="__panel">
        <div className="settings__buttons">
          <NavLink to="general">General Settings</NavLink>
          <NavLink to="networks">Networks Settings</NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
