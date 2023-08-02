import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../includes/panel.scss";
import "./services.scss";

const Services = () => {
  return (
    <div className="__main">
      <div className="breadcrumb">
        <h1>Services</h1>
        <div className="link">Home / Services</div>
      </div>
      <div className="__panel">
        <div className="services__buttons">
          <NavLink to="data">Data Plans</NavLink>
          <NavLink to="datacoupons">Data E-PINs</NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Services;
