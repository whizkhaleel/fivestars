import React from "react";
import "./knowhow.scss";
import { FiUserCheck, FiShoppingCart } from "react-icons/fi";
import { FaFunnelDollar } from "react-icons/fa";
import img from "../../../assets/howitworks.png";

const KnowHow = () => {
  return (
    <section className="container" id="howitworks">
      <h2>Work Process</h2>
      <h5>How it works</h5>
      <div className="__howitworks">
        <div className="__steps">
          <div className="step">
            <FiUserCheck className="icon" />
            <div className="step__texts">
              <h1>Signin</h1>
              <article className="step__text">
                Firstly, you need to sign in to your account using your
                registered username & password.
              </article>
            </div>
          </div>
          <div className="step">
            <FaFunnelDollar className="icon" />
            <div className="step__texts">
              <h1>Fund Wallet</h1>
              <article className="step__text">
                You need to fund your wallet by using any of our payment
                gateways and your wallet gets credited instantly.
              </article>
            </div>
          </div>
          <div className="step">
            <FiShoppingCart className="icon" />
            <div className="step__texts">
              <h1>Place Order</h1>
              <article className="step__text">
                You can now proceed to place an order on any of our services at
                sweet rates.
              </article>
            </div>
          </div>
        </div>
        <img src={img} alt="Know How" />
      </div>
    </section>
  );
};

export default KnowHow;
