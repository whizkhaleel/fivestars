import React from "react";

const MTN = () => {
  return (
    <form method="POST" className="form-group">
      <div className="input-group">
        <label>MTN Airtime</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>MTN SME</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>MTN Gifting</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>MTN Corporate Gifting</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>MTN Special Data</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  );
};

export default MTN;
