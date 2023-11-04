import React from "react";
import "./model.scss";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export const AddPlan = ({ isOpen, setIsOpen }) => {
  const [inputs, setInputs] = useState({
    network_name: "MTN",
    plan_name: "",
    plan_type: "",
    plan_id: "",
    validity_days: "",
    buying_price: "",
    user_price: "",
    reseller_price: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    const payload = {
      network_name: inputs.network_name,
      plan_name: inputs.plan_name,
      plan_type: inputs.plan_type,
      plan_id: inputs.plan_id,
      validity_days: inputs.validity_days,
      buying_price: inputs.buying_price,
      user_price: inputs.user_price,
      reseller_price: inputs.reseller_price,
    };

    axios
      .post("/api/dataplans/add", payload)
      .then((response) => {
        if (response.status === 201) {
          toast.success(`${response.data.message}`, {
            position: "bottom-center",
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
            position: "bottom-center",
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
          position: "bottom-center",
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

  const closeModel = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="__model" style={{ display: isOpen ? "block" : "none" }}>
      <ToastContainer />
      <div className="model_container">
        <div className="model_header">
          <h1>Add new plan</h1>
          <FaTimes onClick={() => closeModel()} />
        </div>
        <div className="model_body">
          <form method="POST" className="form-group" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Plan Network</label>
              <select
                name="network_name"
                defaultValue=""
                onChange={handleInput}
              >
                <option value="">--- Select Option ---</option>
                <option value="MTN">MTN NG</option>
                <option value="Airtel">Airtel</option>
                <option value="Glo">Glo</option>
                <option value="9mobile">9mobile</option>
              </select>
            </div>
            <div className="inline-input">
              <div className="input-group">
                <label>Plan Name</label>
                <input
                  type="text"
                  name="plan_name"
                  placeholder="Enter Plan Name"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="input-group">
                <label>Plan Type</label>
                <select name="plan_type" defaultValue="" onChange={handleInput}>
                  <option value="">--- Select Option ----</option>
                  <option value="SME">SME</option>
                  <option value="Gifting">Gifting</option>
                  <option value="CG">Corporate Gifting</option>
                  <option value="Special Data">Special Data</option>
                </select>
              </div>
            </div>
            <div className="inline-input">
              <div className="input-group">
                <label>Plan ID</label>
                <input
                  type="text"
                  name="plan_id"
                  placeholder="Enter API Plan ID"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="input-group">
                <label>Duration in Days</label>
                <input
                  type="text"
                  name="validity_days"
                  placeholder="Enter Validity Period"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label>Buying Price</label>
              <input
                type="text"
                name="buying_price"
                placeholder="Enter Plan Price from API"
                onChange={handleInput}
              />
            </div>
            <div className="inline-input">
              <div className="input-group">
                <label>User Price</label>
                <input
                  type="text"
                  name="user_price"
                  placeholder="Enter Plan Price for User"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="input-group">
                <label>Reseller Price</label>
                <input
                  type="text"
                  name="reseller_price"
                  placeholder="Enter Plan Price for Reseller"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const AddDataCoupon = ({ isOpen, setIsOpen }) => {
  const closeModel = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="__model" style={{ display: isOpen ? "block" : "none" }}>
      <div className="model_container">
        <div className="model_header">
          <h1>Add new coupon</h1>
          <FaTimes onClick={() => closeModel()} />
        </div>
        <div className="model_body">
          <form method="POST" className="form-group">
            <div className="input-group">
              <label>PIN Network</label>
              <select name="plan" defaultValue="" onChange="">
                <option value="MTN">MTN NG</option>
                <option value="MTN">Airtel</option>
              </select>
            </div>
            <div className="inline-input">
              <div className="input-group">
                <label>PIN Name</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter PIN Name"
                  required
                />
              </div>
              <div className="input-group">
                <label>PIN Type</label>
                <select name="plan" defaultValue="" onChange="">
                  <option value="MTN">Data Coupon</option>
                </select>
              </div>
            </div>
            <div className="inline-input">
              <div className="input-group">
                <label>PIN ID</label>
                <input type="number" placeholder="Enter API PIN ID" required />
              </div>
              <div className="input-group">
                <label>Duration in Days</label>
                <input
                  type="number"
                  name="duration"
                  placeholder="Enter Validity Period"
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label>Buying Price</label>
              <input
                type="number"
                name="buyingPrice"
                placeholder="Enter PIN Price from API"
              />
            </div>
            <div className="inline-input">
              <div className="input-group">
                <label>User Price</label>
                <input
                  type="number"
                  name="userPrice"
                  placeholder="Enter PIN Price for User"
                  required
                />
              </div>
              <div className="input-group">
                <label>Reseller Price</label>
                <input
                  type="number"
                  name="resellerPrice"
                  placeholder="Enter PIN Price for Reseller"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const EditPlan = ({ isOpen, setIsOpen }) => {
  const closeModel = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="__model" style={{ display: isOpen ? "block" : "none" }}>
      <div className="model_container">
        <div className="model_header">
          <h1>Edit plan</h1>
          <FaTimes onClick={() => closeModel()} />
        </div>
        <div className="model_body">
          <form method="POST" className="form-group">
            <div className="input-group">
              <label>Plan Network</label>
              <select name="plan" defaultValue="" onChange="">
                <option value="MTN">MTN NG</option>
                <option value="MTN">Airtel</option>
              </select>
            </div>
            <div className="inline-input">
              <div className="input-group">
                <label>Plan Name</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Plan Name"
                  required
                />
              </div>
              <div className="input-group">
                <label>Plan Type</label>
                <select name="plan" defaultValue="" onChange="">
                  <option value="MTN">SME</option>
                  <option value="MTN">Corporate Gifting</option>
                </select>
              </div>
            </div>
            <div className="inline-input">
              <div className="input-group">
                <label>Plan ID</label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter API Plan ID"
                  required
                />
              </div>
              <div className="input-group">
                <label>Duration in Days</label>
                <input
                  type="text"
                  name="duration"
                  placeholder="Enter Validity Period"
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label>Buying Price</label>
              <input
                type="text"
                name="buyingPrice"
                placeholder="Enter Plan Price from API"
              />
            </div>
            <div className="inline-input">
              <div className="input-group">
                <label>User Price</label>
                <input
                  type="text"
                  name="userPrice"
                  placeholder="Enter Plan Price for User"
                  required
                />
              </div>
              <div className="input-group">
                <label>Reseller Price</label>
                <input
                  type="text"
                  name="resellerPrice"
                  placeholder="Enter Plan Price for Reseller"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const EditDataCoupon = ({ isOpen, setIsOpen }) => {
  const closeModel = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="__model" style={{ display: isOpen ? "block" : "none" }}>
      <div className="model_container">
        <div className="model_header">
          <h1>Edit coupon</h1>
          <FaTimes onClick={() => closeModel()} />
        </div>
        <div className="model_body">
          <form method="POST" className="form-group">
            <div className="input-group">
              <label>PIN Network</label>
              <select name="plan" defaultValue="" onChange="">
                <option value="MTN">MTN NG</option>
                <option value="MTN">Airtel</option>
              </select>
            </div>
            <div className="inline-input">
              <div className="input-group">
                <label>PIN Name</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter PIN Name"
                  required
                />
              </div>
              <div className="input-group">
                <label>PIN Type</label>
                <select name="plan" defaultValue="" onChange="">
                  <option value="MTN">Data Coupon</option>
                </select>
              </div>
            </div>
            <div className="inline-input">
              <div className="input-group">
                <label>PIN ID</label>
                <input type="number" placeholder="Enter API PIN ID" required />
              </div>
              <div className="input-group">
                <label>Duration in Days</label>
                <input
                  type="number"
                  name="duration"
                  placeholder="Enter Validity Period"
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label>Buying Price</label>
              <input
                type="number"
                name="buyingPrice"
                placeholder="Enter PIN Price from API"
              />
            </div>
            <div className="inline-input">
              <div className="input-group">
                <label>User Price</label>
                <input
                  type="number"
                  name="userPrice"
                  placeholder="Enter PIN Price for User"
                  required
                />
              </div>
              <div className="input-group">
                <label>Reseller Price</label>
                <input
                  type="number"
                  name="resellerPrice"
                  placeholder="Enter PIN Price for Reseller"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
