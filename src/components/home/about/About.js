import React from "react";
import "./about.scss";
import img from "../../../assets/about_image.png";

const About = () => {
  return (
    <section className="container" id="about">
      <h2>About us</h2>
      <h5>Get to know us</h5>
      <div className="__about">
        <article className="about__text">
          <p>
            We are dedicated to delivering exceptional services to our valued
            customers while fostering lasting relationship based on trust,
            integrity and mutual respect.
          </p>
          <p>
            Experience the difference with us- our commitment to quality,
            innovation and customer satisfaction sets us apart from the rest.
            Choose us for exceptional services and results that exceed your
            expectations.
          </p>
        </article>
        <div className="about__image">
          <img src={img} alt="About us"></img>
        </div>
      </div>
    </section>
  );
};

export default About;
