import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const ApiEndpoints = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [inputs, setInputs] = useState({
    airtimeApiKey: "",
    airtimeApiUrl: "",
    dataApiKey: "",
    dataApiUrl: "",
    dataCardApiKey: "",
    dataCardApiUrl: "",
    cableApiKey: "",
    cableApiUrl: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      airtimeApiKey: inputs.airtimeApiKey,
      airtimeApiUrl: inputs.airtimeApiUrl,
      dataApiKey: inputs.dataApiKey,
      dataApiUrl: inputs.dataApiUrl,
      dataCardApiKey: inputs.dataCardApiKey,
      dataCardApiUrl: inputs.dataCardApiUrl,
      cableApiKey: inputs.cableApiKey,
      cableApiUrl: inputs.cableApiUrl,
    };

    axios
      .post("/api/api_endpoints/settings", payload)
      .then((response) => {
        if (response.status === 201) {
          toast.success(`${response.data.message}`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error(`${response.data.message}`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${error.message}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  useEffect(() => {
    axios
      .post("/api/api_endpoints/records")
      .then((response) => {
        const monInfo = response.data;
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching monnify details:", error);
        setIsLoading(false);
      });

    document.title = "FiveStarsData | Monnify Settings";
  }, []);

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div className="input-group">
        <label>Airtime API Key</label>
        <input
          type="text"
          name="airtimeApiKey"
          placeholder="Enter Airtime API Key"
          value={inputs.airtimeApiKey}
          onChange={handleInput}
        />
      </div>
      <div className="input-group">
        <label>Airtime API URL</label>
        <input
          type="text"
          name="airtimeApiUrl"
          placeholder="Enter Airtime API URL"
          value={inputs.airtimeApiUrl}
          onChange={handleInput}
        />
      </div>
      <div className="input-group">
        <label>Data API Key</label>
        <input
          type="text"
          name="dataApiKey"
          placeholder="Enter Data API Key"
          value={inputs.dataApiKey}
          onChange={handleInput}
        />
      </div>
      <div className="input-group">
        <label>Data API URL</label>
        <input
          type="text"
          name="dataApiUrl"
          placeholder="Enter Data API URL"
          value={inputs.dataApiUrl}
          onChange={handleInput}
        />
      </div>
      <div className="input-group">
        <label>Data Card API Key</label>
        <input
          type="text"
          name="dataCardApiKey"
          placeholder="Enter Data Card API Key"
          value={inputs.dataCardApiKey}
          onChange={handleInput}
        />
      </div>
      <div className="input-group">
        <label>Data Card API URL</label>
        <input
          type="text"
          name="dataCardApiUrl"
          placeholder="Enter Data Card API URL"
          value={inputs.dataCardApiUrl}
          onChange={handleInput}
        />
      </div>
      <div className="input-group">
        <label>Cable API Key</label>
        <input
          type="text"
          name="cableApiKey"
          placeholder="Enter Cable API Key"
          value={inputs.cableApiKey}
          onChange={handleInput}
        />
      </div>
      <div className="input-group">
        <label>Cable API URL</label>
        <input
          type="text"
          name="cableApiUrl"
          placeholder="Enter Cable API URL"
          value={inputs.cableApiUrl}
          onChange={handleInput}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default ApiEndpoints;
