import "./navbar.scss";
import { Spin as Hamburger } from "hamburger-react";
import logo from "../../../assets/logo_e.png";
import { AiOutlineBell } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

const Nav = ({ isOpen, setIsOpen, navRef }) => {
  return (
    <nav className="nav">
      <div className="nav__left">
        <div className="hamburger" ref={navRef}>
          <Hamburger
            className="icon"
            toggled={isOpen}
            toggle={setIsOpen}
            aria-label="hamburger"
          />
        </div>
        <div className="nav__logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="nav__right">
        <AiOutlineBell />
        <FaUserAlt />
      </div>
    </nav>
  );
};

export default Nav;
