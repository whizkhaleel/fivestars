import React from "react";

const General = () => {
  return (
    <form method="POST" className="form-group">
      <div className="input-group">
        <label>Site Name</label>
        <input name="name" type="text" placeholder="Enter Site Name" />
      </div>
      <div className="input-group">
        <label>Site URL</label>
        <input name="url" type="text" placeholder="Enter Site URL" />
      </div>
      <div className="input-group">
        <label>API Documentation Link</label>
        <input
          type="text"
          name="contract"
          placeholder="Enter API Documentation Link"
        />
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  );
};

export default General;
