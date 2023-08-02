import React from "react";
import "../panel.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const DataCard = () => {
  const [network, setNetwork] = useState("");
  const [plan, setPlan] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      network,
      plan,
      name,
      quantity,
      amount,
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
        <h1>Print Data Card</h1>
        <div className="link">Home / Date E-Pin</div>
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
            <label>Select plan</label>
            <select
              name="type"
              defaultValue={plan}
              onChange={(event) => setPlan(event.target.value)}
            >
              <option value="1GB">1GB</option>
              <option value="@GB">2GB</option>
            </select>
          </div>
          <div className="input-group">
            <label>Name on card</label>
            <input
              type="text"
              name="username"
              placeholder="Name on card"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Select quantity</label>
            <select
              name="type"
              defaultValue={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="input-group">
            <label>Amount</label>
            <input
              type="text"
              name="username"
              placeholder="N0.00"
              value="N234.00"
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
          <button className="btn btn-primary">Buy</button>
        </form>
      </div>
    </div>
  );
};

export default DataCard;
