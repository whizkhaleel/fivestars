import React from "react";

const ApiEndpoints = () => {
  return (
    <form method="POST" className="form-group">
      <div className="input-group">
        <label>Airtime API Key</label>
        <input type="text" placeholder="Enter Airtime API Key" />
      </div>
      <div className="input-group">
        <label>Airtime API URL</label>
        <input type="text" placeholder="Enter Airtime API URL" />
      </div>
      <div className="input-group">
        <label>Data API Key</label>
        <input type="text" placeholder="Enter Data API Key" />
      </div>
      <div className="input-group">
        <label>Data API URL</label>
        <input type="text" placeholder="Enter Data API URL" />
      </div>
      <div className="input-group">
        <label>Data Card API Key</label>
        <input type="text" placeholder="Enter Data Card API Key" />
      </div>
      <div className="input-group">
        <label>Data Card API URL</label>
        <input type="text" placeholder="Enter Data API URL" />
      </div>
      <div className="input-group">
        <label>Cable API Key</label>
        <input type="text" placeholder="Enter Cable API Key" />
      </div>
      <div className="input-group">
        <label>Cable API URL</label>
        <input type="text" placeholder="Enter Cable API URL" />
      </div>
      <button className="btn btn-primary">Buy</button>
    </form>
  );
};

export default ApiEndpoints;
