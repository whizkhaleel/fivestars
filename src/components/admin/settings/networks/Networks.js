import React from "react";
import "./networks.scss";
import { NavLink, Outlet } from "react-router-dom";

const Networks = () => {
  return (
    <div className="__networks">
      <div className="networks__buttons">
        <NavLink to="mtn">MTN</NavLink>
        <NavLink to="airtel">Airtel</NavLink>
        <NavLink to="glo">Glo</NavLink>
        <NavLink to="9mobile">9mobile</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Networks;
