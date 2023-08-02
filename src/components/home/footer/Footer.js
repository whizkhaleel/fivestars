import React from "react";
import "./footer.scss";
import logo from "../../../assets/logo.png";
import { GoMail, GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer__container" id="footer">
      <div className="container __footer">
        <div className="footer__logo">
          <img src={logo} alt="Footer Logo" />
          <article className="__text">
            FiveStarsData is a telecommunication industry playing a major role
            in the distribution and selling of the most cheapest Data plans,
            Airtime, DsTv subscription, GoTv subscription, Startimes
            subscription, Electricity subscription and Airtime to cash
            conversion.
          </article>
        </div>
        <div className="footer__contact" id="contact">
          <h1>Contact us</h1>
          <div className="__contacts">
            <span className="__contact">
              <GoLocation className="icon" /> Shallah Area, Gwandu. Kebbi State.
            </span>
            <span className="__contact">
              <BiPhoneCall className="icon" /> +234-806-482-6628.
            </span>
            <span className="__contact">
              <GoMail className="icon" /> support@fivestars.com.ng
            </span>
          </div>
        </div>
        <div className="footer__links">
          <h1>Quick Links</h1>
          <div className="quick__links">
            <a href="#about">About us</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
      <div className="footer_credit">
        <p>&copy; 2023 | Powered by Five Stars Solution.</p>
      </div>
    </section>
  );
};

export default Footer;
