import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Monnify = () => {
  const [formData, setFormData] = useState({
    monnifyApiKey: "",
    monnifySecretKey: "",
    contractCode: "",
    walletTopUpCharges: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("/api/monnify/settings", formData)
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div className="input-group">
        <label>Monnify API Key</label>
        <input
          name="monnifyApiKey"
          type="text"
          placeholder="Enter Monnify API key"
          value={formData.monnifyApiKey}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label>Monnify Secret Key</label>
        <input
          name="monnifySecretKey"
          type="text"
          placeholder="Enter Monnify Secret key"
          value={formData.monnifySecretKey}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label>Monnify Contract Code</label>
        <input
          type="text"
          name="contractCode"
          placeholder="Enter Monnify Contract Code"
          value={formData.contractCode}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label>Wallet Top-up Charges</label>
        <input
          type="text"
          name="walletTopUpCharges"
          placeholder="Enter Wallet Top-up Charges"
          value={formData.walletTopUpCharges}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default Monnify;
