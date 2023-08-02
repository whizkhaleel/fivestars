import React from "react";
import "./hero.scss";
import heroImg from "../../../../assets/hero_image.jpg";
import CTA from "./cta/CTA";

const Hero = () => {
  return (
    <div className="__hero" id="home">
      <img className="hero__image" src={heroImg} alt="Hero" />
      <div className="hero__contents">
        <div className="hero__text">
          <h1>
            Welcome to <span>FiveStarsData</span>
          </h1>
          <article className="__text">
            We offer you the most cheapest and affordable Data bundles, Airtime,
            DSTV, GoTV and Startimes subscriptions. We also provide solutions to
            Electricity bills and also sells WAEC, NABTEB and NECO PINs.
            Register and enjoy our services.
          </article>
        </div>
        <CTA />
      </div>
    </div>
  );
};

export default Hero;
