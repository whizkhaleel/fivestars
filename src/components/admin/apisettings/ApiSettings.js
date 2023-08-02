import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../includes/panel.scss";
import "./apisettings.scss";

const ApiSettings = () => {
  return (
    <div className="__main">
      <div className="breadcrumb">
        <h1>API Settings</h1>
        <div className="link">Home / API Settings</div>
      </div>
      <div className="__panel">
        <div className="api__buttons">
          <NavLink to="monnify">Monnify API</NavLink>
          <NavLink to="apiendpoints">API Endpoints</NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ApiSettings;
