import React from "react";
import "../panel.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const CableSubs = () => {
  const [type, setType] = useState("");
  const [number, setNumber] = useState("");
  const [plan, setPlan] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      type,
      number,
      plan,
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
        <h1>Cable Subscriptions</h1>
        <div className="link">Home / Cable Subscriptions</div>
      </div>
      <div className="__panel">
        <form method="POST" className="form-group" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Select type</label>
            <select
              name="plan"
              defaultValue={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="MTN">GoTv</option>
              <option value="MTN">DSTv</option>
            </select>
          </div>
          <div className="input-group">
            <label>Smart card number</label>
            <input
              type="text"
              name="username"
              placeholder="N0.00"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Select plan</label>
            <select
              name="plan"
              defaultValue={plan}
              onChange={(event) => setPlan(event.target.value)}
            >
              <option value="MTN">GoTv</option>
              <option value="MTN">DSTv</option>
            </select>
          </div>
          <button className="btn btn-primary">Buy</button>
        </form>
      </div>
    </div>
  );
};

export default CableSubs;
