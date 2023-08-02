import React from "react";

const NineMobile = () => {
  return (
    <form method="POST" className="form-group">
      <div className="input-group">
        <label>9moble Airtime</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>9mobile SME</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>9mobile Gifting</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>9mobile Corporate Gifting</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>9mobile Special Data</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  );
};

export default NineMobile;
