import React, { useState, useRef, useEffect } from "react";
import "./dashboard.scss";
import Nav from "../../includes/nav/Nav";
import { SidebarAdmin } from "../../includes/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <SidebarAdmin
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

export default AdminDashboard;
