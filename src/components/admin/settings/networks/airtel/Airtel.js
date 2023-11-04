import React from "react";

const Airtel = () => {
  return (
    <form method="POST" className="form-group">
      <div className="input-group">
        <label>Network ID</label>
        <input type="text" value="" onChange="" />
      </div>
      <div className="input-group">
        <label>Airtel Airtime</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>Airtel SME</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>Airtel Gifting</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>Airtel Corporate Gifting</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>Airtel Special Data</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  );
};

export default Airtel;
