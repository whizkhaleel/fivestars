import React from "react";

const Glo = () => {
  return (
    <form method="POST" className="form-group">
      <div className="input-group">
        <label>Network ID</label>
        <input type="text" value="" onChange="" />
      </div>
      <div className="input-group">
        <label>Glo Airtime</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>Glo SME</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>Glo Gifting</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>Glo Corporate Gifting</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>Glo Special Data</label>
        <select name="plan">
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  );
};

export default Glo;
