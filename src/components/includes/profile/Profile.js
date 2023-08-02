import React from "react";
import "../panel.scss";

const Profile = () => {
  return (
    <div className="__main">
      <div className="breadcrumb">
        <h1>Profile</h1>
        <div className="link">Home / Profile</div>
      </div>
      <div className="__panel">
        <h1>My Profile</h1>
        <form method="POST" className="form-group">
          <div className="input-group">
            <label>Name</label>
            <input type="text" name="name" value="Ibrahim Halilu" disabled />
          </div>
          <div className="input-group">
            <label>Phone no.</label>
            <input type="text" name="phone" value="08064826628" disabled />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value="whizkhaleel@ymail.com"
              disabled
            />
          </div>
          <div className="input-group">
            <label>Username</label>
            <input type="text" name="username" value="whizhaleel" disabled />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
