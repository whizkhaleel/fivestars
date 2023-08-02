import React from "react";
import "./pricing.scss";
import MTNimg from "../../../assets/mtn.png";
import Airtelimg from "../../../assets/airtel.png";
import Gloimg from "../../../assets/glo.png";
import Etiimg from "../../../assets/9mobile.png";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Pricing = () => {
  return (
    <section className="container" id="pricing">
      <h2>Data Plans and Prices</h2>
      <h5>We offer affordable prices</h5>
      <div className="__pricing">
        <div className="pricing__card">
          <img src={MTNimg} alt="MTN Prices" />
          <h1>MTN Data Plans</h1>
          <table className="pricing__table">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Type</th>
                <th>Price</th>
                <th>Valid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>500MB</td>
                <td>CG</td>
                <td>N125</td>
                <td>30 Days</td>
              </tr>
              <tr>
                <td>500MB</td>
                <td>SME</td>
                <td>N115</td>
                <td>30 Days</td>
              </tr>
            </tbody>
          </table>
          <Link to="/login" className="btn btn-primary">
            <BsCart4 className="icon" /> Buy Now
          </Link>
        </div>
        <div className="pricing__card">
          <img src={Airtelimg} alt="MTN Prices" />
          <h1>Airtel Data Plans</h1>
          <table className="pricing__table">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Type</th>
                <th>Price</th>
                <th>Valid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>500MB</td>
                <td>CG</td>
                <td>N125</td>
                <td>30 Days</td>
              </tr>
              <tr>
                <td>500MB</td>
                <td>SME</td>
                <td>N115</td>
                <td>30 Days</td>
              </tr>
            </tbody>
          </table>
          <Link to="/login" className="btn btn-primary">
            <BsCart4 className="icon" /> Buy Now
          </Link>
        </div>
        <div className="pricing__card">
          <img src={Gloimg} alt="MTN Prices" />
          <h1>Glo Data Plans</h1>
          <table className="pricing__table">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Type</th>
                <th>Price</th>
                <th>Valid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>500MB</td>
                <td>CG</td>
                <td>N125</td>
                <td>30 Days</td>
              </tr>
              <tr>
                <td>500MB</td>
                <td>SME</td>
                <td>N115</td>
                <td>30 Days</td>
              </tr>
            </tbody>
          </table>
          <Link to="/login" className="btn btn-primary">
            <BsCart4 className="icon" /> Buy Now
          </Link>
        </div>
        <div className="pricing__card">
          <img src={Etiimg} alt="MTN Prices" />
          <h1>Etisalat Data Plans</h1>
          <table className="pricing__table">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Type</th>
                <th>Price</th>
                <th>Valid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>500MB</td>
                <td>CG</td>
                <td>N125</td>
                <td>30 Days</td>
              </tr>
              <tr>
                <td>500MB</td>
                <td>SME</td>
                <td>N115</td>
                <td>30 Days</td>
              </tr>
            </tbody>
          </table>
          <Link to="/login" className="btn btn-primary">
            <BsCart4 className="icon" />
            Buy Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
