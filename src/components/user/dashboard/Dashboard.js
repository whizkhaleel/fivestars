import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.scss";
import Nav from "../../includes/nav/Nav";
import { SidebarUser } from "../../includes/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";

const UserDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("Token");
  const navigate = useNavigate();

  const sidebarRef = useRef(null);
  const navRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (
      sidebarRef.current &&
      navRef.current &&
      !sidebarRef.current.contains(e.target) &&
      !navRef.current.contains(e.target) &&
      isOpen
    ) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const decode = jwtDecode(token);

    if (!token || decode.userRole !== 2) {
      navigate("/login");
      return;
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <>
      <Nav
        style={{ position: "relative" }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navRef={navRef}
      />
      <div className="__main_container">
        <SidebarUser
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          sidebarRef={sidebarRef}
          handleOutsideClick={handleOutsideClick}
        />
        <div className="__container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
