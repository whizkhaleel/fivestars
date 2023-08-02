import React from "react";
import "./features.scss";
import { BsLaptop } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Features = () => {
  return (
    <section className="container" id="why_us">
      <h2>Features</h2>
      <h5>Why choose us</h5>
      <div className="__features">
        <div className="feature">
          <BsLaptop className="icon" />
          <h1>We are Automated</h1>
          <article className="feature__text">
            We use cutting-edge technology to run our services. Our services are
            delivered to you instantly, and wallet funding is automated.
          </article>
        </div>
        <div className="feature">
          <AiOutlineCheck className="icon" />
          <h1>We are Reliable</h1>
          <article className="feature__text">
            We are fully optimized platform for reliability and dependabilty.
            You get 100% value for any transaction you carry with us.
          </article>
        </div>
        <div className="feature">
          <BiSupport className="icon" />
          <h1>24/7 Support</h1>
          <article className="feature__text">
            Our customers are premium to us, hence satisfying them is our
            topmost priority. Our customer service is just a click away.
          </article>
        </div>
        <div className="feature">
          <RiSecurePaymentLine className="icon" />
          <h1>We are Secure</h1>
          <article className="feature__text">
            Your funds are secured with your e-wallet PIN and can be kept for
            you as long as you want. You can also access it anytime.
          </article>
        </div>
      </div>
    </section>
  );
};

export default Features;
