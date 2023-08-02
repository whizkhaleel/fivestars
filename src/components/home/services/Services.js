import React from "react";
import "./services.scss";
import { BiWifi2 } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { RiExchangeDollarLine } from "react-icons/ri";
import { FaSms, FaLaptop } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import dataImg from "../../../assets/buy_data.png";
import airtimeImg from "../../../assets/airtime_topup.png";
import cashImg from "../../../assets/airtime_cash.png";
import bulkImg from "../../../assets/bulk_sms.jpg";
import utilitytImg from "../../../assets/utility_payment.png";
import cableImg from "../../../assets/cable_sub.png";

const Services = () => {
  return (
    <section className="container" id="services">
      <h2>Services</h2>
      <h5>What we offer</h5>
      <div className="__services">
        <div className="service">
          <div className="service_image">
            <img src={dataImg} alt="" />
            <BiWifi2 className="icon" />
          </div>
          <div className="service_texts">
            <h1>Buy Data</h1>
            <article className="service_text">
              Start enjoying our very low rates, affordable and chepest Data
              plans for your internet surfing.
            </article>
          </div>
        </div>
        <div className="service">
          <div className="service_image">
            <img src={airtimeImg} alt="" />
            <FiPhoneCall className="icon" />
          </div>
          <div className="service_texts">
            <h1>Buy Airtime</h1>
            <article className="service_text">
              Making an online recharge with discount has become very easy and
              safe on platform.
            </article>
          </div>
        </div>
        <div className="service">
          <div className="service_image">
            <img src={cashImg} alt="" />
            <RiExchangeDollarLine className="icon" />
          </div>
          <div className="service_texts">
            <h1>Airtime to Cash</h1>
            <article className="service_text">
              Airtime to cash conversion at a very good attractive rate, login
              to get current conversion rate.
            </article>
          </div>
        </div>
        <div className="service">
          <div className="service_image">
            <img src={bulkImg} alt="" />
            <FaSms className="icon" />
          </div>
          <div className="service_texts">
            <h1>Bulk SMS</h1>
            <article className="service_text">
              With this service on our platform, you can Send Bulk SMS to any
              number for as low as just 2.5kobo per unit.
            </article>
          </div>
        </div>
        <div className="service">
          <div className="service_image">
            <img src={utilitytImg} alt="" />
            <FaLaptop className="icon" />
          </div>
          <div className="service_texts">
            <h1>Utility Payments</h1>
            <article className="service_text">
              Because we understand your needs, we have made bills and utilities
              payment more convenient.
            </article>
          </div>
        </div>
        <div className="service">
          <div className="service_image">
            <img src={cableImg} alt="" />
            <CgScreen className="icon" />
          </div>
          <div className="service_texts">
            <h1>Cable Subscription</h1>
            <article className="service_text">
              Instantly activate cable subscription with favourable discounts
              compared to others.
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
