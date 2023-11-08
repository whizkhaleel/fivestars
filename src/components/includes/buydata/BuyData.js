import React from "react";
import "../panel.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingComponent from "../../../LoadingComponent";

const BuyData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [networks, setNetworks] = useState(null);
  const [types, setTypes] = useState(null);
  const [plans, setPlans] = useState(null);

  const setNetworksInfo = (newInfo) => {
    setNetworks(newInfo);
  };

  useEffect(() => {
    axios
      .post("/api/network/records")
      .then((response) => {
        const networksInfo = response.data;
        setNetworksInfo(networksInfo);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching monnify details:", error);
        setIsLoading(false);
      });
  }, []);

  const [network, setNetwork] = useState("");
  const [type, setType] = useState("");
  const [plan, setPlan] = useState("");
  const [amount, setAmount] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      network,
      plan,
      amount,
      number,
    };

    axios
      .post("/api/login", userData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    document.title = "FiveStarsData | Login";
  }, []);
  return (
    <>
      {isLoading === true ? (
        <LoadingComponent />
      ) : (
        <div className="__main">
          <div className="breadcrumb">
            <h1>Buy Data</h1>
            <div className="link">Home / Buy Data</div>
          </div>
          <div className="__panel">
            <form method="POST" className="form-group" onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Select network</label>
                <select
                  name="plan"
                  defaultValue={network}
                  onChange={(event) => setNetwork(event.target.value)}
                >
                  <option value="">--- Select Network ---</option>
                  {networks.map((network) => {
                    return (
                      <option key={network._id} value={network.network_id}>
                        {network.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="input-group">
                <label>Select type</label>
                <select
                  name="type"
                  defaultValue={type}
                  onChange={(event) => setType(event.target.value)}
                >
                  <option value="CG">CG</option>
                  <option value="SME">SME</option>
                </select>
              </div>
              <div className="input-group">
                <label>Select Plan</label>
                <select
                  name="type"
                  defaultValue={plan}
                  onChange={(event) => setPlan(event.target.value)}
                >
                  <option value="1GB">1GB</option>
                  <option value="@GB">2GB</option>
                </select>
              </div>
              <div className="input-group">
                <label>Amount</label>
                <input
                  type="text"
                  name="username"
                  placeholder="N0.00"
                  value="N234.00"
                  onChange={(event) => setAmount(event.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Phone No.</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Recipient's Phone No."
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                />
              </div>
              <button className="btn btn-primary">Buy</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyData;
