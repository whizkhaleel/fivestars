import React from "react";
import "../panel.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const ChangePass = () => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      oldPass,
      newPass,
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
        <h1>Change Password</h1>
        <div className="link">Home / Change Password</div>
      </div>
      <div className="__panel">
        <form method="POST" className="form-group" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Old password</label>
            <input
              type="text"
              name="oldPass"
              placeholder="Enter old password"
              value={oldPass}
              onChange={(event) => setOldPass(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label>New password</label>
            <input
              type="password"
              name="phone"
              placeholder="Enter new password"
              value={newPass}
              onChange={(event) => setNewPass(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Confirm new password</label>
            <input
              type="password"
              name="phone"
              placeholder="Enter new password"
              value={confirmPass}
              onChange={(event) => setConfirmPass(event.target.value)}
            />
          </div>
          <button className="btn btn-primary">Change</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePass;
