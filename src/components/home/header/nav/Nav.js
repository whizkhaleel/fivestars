import "./nav.scss";
import logo from "../../../../assets/logo_e.png";
import { Spin as Hamburger } from "hamburger-react";
import { useState, useRef, useEffect } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (
      navRef.current &&
      !navRef.current.contains(e.target) &&
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
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

  window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <>
      <nav ref={navRef}>
        <div className="nav__logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav__links">
          <a href="/">Home</a>
          <a href="#about">About us</a>
          <a href="#services">Our services</a>
          <a href="#why_us">Why choose us</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact us</a>
        </div>
        <div className="hamburger" ref={navRef}>
          <span>
            <Hamburger className="icon" toggled={isOpen} toggle={setIsOpen} />
          </span>
        </div>
      </nav>
      <div className={`nav__menu ${isOpen ? "mobile" : ""}`} ref={menuRef}>
        <a href="/">Home</a>
        <a href="#about">About us</a>
        <a href="#services">Our services</a>
        <a href="#why_us">Why choose us</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact us</a>
      </div>
    </>
  );
};

export default Nav;
