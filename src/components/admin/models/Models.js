import React from "react";
import "./model.scss";
import { FaTimes } from "react-icons/fa";

export const AddPlan = ({ isOpen, setIsOpen }) => {
  const closeModel = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="__model" style={{ display: isOpen ? "block" : "none" }}>
      <div className="model_container">
        <div className="model_header">
          <h1>Add new plan</h1>
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
