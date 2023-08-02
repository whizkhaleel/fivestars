import React from "react";

const Monnify = () => {
  return (
    <form method="POST" className="form-group">
      <div className="input-group">
        <label>Monnify API Key</label>
        <input name="monnify" type="text" placeholder="Enter Monnify API key" />
      </div>
      <div className="input-group">
        <label>Monnify Secret Key</label>
        <input name="monnify" type="text" placeholder="Enter Monnify API key" />
      </div>
      <div className="input-group">
        <label>Monnify Contract Code</label>
        <input
          type="text"
          name="contract"
          placeholder="Enter Monnify Contract Code"
        />
      </div>
      <div className="input-group">
        <label>Wallet Top-up Charges</label>
        <input
          type="text"
          name="contract"
          placeholder="Enter Wallet Top-up Charges"
        />
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  );
};

export default Monnify;
