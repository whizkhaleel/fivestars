import axios from "axios";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import LoadingComponent from "../../../../LoadingComponent";
const Monnify = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const setMonnifyInfo = (newInfo) => {
    setData(newInfo);
  };

  useEffect(() => {
    axios
      .post("/api/monnify/records")
      .then((response) => {
        const monInfo = response.data;
        setMonnifyInfo(monInfo);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching monnify details:", error);
        setIsLoading(false);
      });

    document.title = "FiveStarsData | Monnify Settings";
  }, []);

  const [inputs, setInputs] = useState({
    api_key: data[0]?.api_key,
    secret_key: data[0]?.secret_key,
    contract_code: data[0]?.contract_code,
    top_up_charges: data[0]?.top_up_charges,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      api_key: inputs.api_key,
      secret_key: inputs.secret_key,
      contract_code: inputs.contract_code,
      top_up_charges: inputs.top_up_charges,
    };

    axios
      .post("/api/monnify/settings", payload)
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

  return (
    <>
      {isLoading === false ? (
        <form onSubmit={handleSubmit} className="form-group">
          <ToastContainer />
          <div className="input-group">
            <label>Monnify API Key</label>
            <input
              name="api_key"
              type="text"
              placeholder="Enter Monnify API key"
              value={inputs.api_key}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label>Monnify Secret Key</label>
            <input
              name="secret_key"
              type="text"
              placeholder="Enter Monnify Secret key"
              value={inputs.secret_key}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label>Monnify Contract Code</label>
            <input
              type="text"
              name="contract_code"
              placeholder="Enter Monnify Contract Code"
              value={inputs.contract_code}
              onChange={handleInput}
            />
          </div>
          <div className="input-group">
            <label>Wallet Top-up Charges</label>
            <input
              type="text"
              name="top_up_charges"
              placeholder="Enter Wallet Top-up Charges"
              value={inputs.top_up_charges}
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
};

export default Monnify;
