import axios from "axios";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const Monnify = () => {
  const [inputs, setInputs] = useState({
    api_key: "",
    secret_key: "",
    contract_code: "",
    top_up_charges: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
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
    <form onSubmit={handleSubmit} className="form-group">
      <ToastContainer />
      <div className="input-group">
        <label>Monnify API Key</label>
        <input
          name="monnifyApiKey"
          type="text"
          placeholder="Enter Monnify API key"
          value={inputs.api_key}
          onChange={handleInput}
        />
      </div>
      <div className="input-group">
        <label>Monnify Secret Key</label>
        <input
          name="monnifySecretKey"
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
          name="contractCode"
          placeholder="Enter Monnify Contract Code"
          value={inputs.contract_code}
          onChange={handleInput}
        />
      </div>
      <div className="input-group">
        <label>Wallet Top-up Charges</label>
        <input
          type="text"
          name="walletTopUpCharges"
          placeholder="Enter Wallet Top-up Charges"
          value={inputs.top_up_charges}
          onChange={handleInput}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default Monnify;
