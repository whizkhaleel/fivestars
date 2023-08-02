import React from "react";
import "../panel.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const BuyAirtime = () => {
  const [network, setNetwork] = useState("");
  const [amount, setAmount] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      network,
      amount,
      number,
    };

    axios
      .post("/api/login", userData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    document.title = "FiveStarsData | Login";
  }, []);
  return (
    <div className="__main">
      <div className="breadcrumb">
        <h1>Buy Airtime</h1>
        <div className="link">Home / Buy Airtime</div>
      </div>
      <div className="__panel">
        <form method="POST" className="form-group" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Select network</label>
            <select
              name="plan"
              defaultValue={network}
              onChange={(event) => setNetwork(event.target.value)}
            >
              <option value="MTN">MTN NG</option>
              <option value="MTN">Airtel</option>
            </select>
          </div>
          <div className="input-group">
            <label>Amount</label>
            <input
              type="text"
              name="username"
              placeholder="N0.00"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Phone No.</label>
            <input
              type="text"
              name="phone"
              placeholder="Recipient's Phone No."
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />
          </div>
          <button className="btn btn-primary">Buy</button>
        </form>
      </div>
    </div>
  );
};

export default BuyAirtime;
