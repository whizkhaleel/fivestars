import React from "react";
import "../panel.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const ChangePin = () => {
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      oldPin,
      newPin,
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
        <h1>Change PIN</h1>
        <div className="link">Home / Change PIN</div>
      </div>
      <div className="__panel">
        <form method="POST" className="form-group" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Old PIN</label>
            <input
              type="text"
              name="oldPass"
              placeholder="Enter old PIN"
              value={oldPin}
              onChange={(event) => setOldPin(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label>New PIN</label>
            <input
              type="password"
              name="phone"
              placeholder="Enter new PIN"
              value={newPin}
              onChange={(event) => setNewPin(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Confirm new PIN</label>
            <input
              type="password"
              name="phone"
              placeholder="Enter new PIN"
              value={confirmPin}
              onChange={(event) => setConfirmPin(event.target.value)}
            />
          </div>
          <button className="btn btn-primary">Change</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePin;
