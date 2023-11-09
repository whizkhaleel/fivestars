import React from "react";
import "../panel.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingComponent from "../../../LoadingComponent";

const BuyAirtime = () => {
  const [network, setNetwork] = useState("");
  const [amount, setAmount] = useState("");
  const [number, setNumber] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [networks, setNetworks] = useState(null);

  useEffect(() => {
    axios
      .post("/api/networks/records")
      .then((response) => {
        const networksInfo = response.data;
        setNetworks(networksInfo);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching networks details:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      network,
      amount,
      number,
    };

    axios
      .post("/api/buyairtime", payload)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    document.title = "FiveStarsData | Buy Airtime";
  }, []);
  return (
    <>
      {isLoading === true ? (
        <LoadingComponent />
      ) : (
        <div className="__main">
          <div className="breadcrumb">
            <h1>Buy Airtime</h1>
            <div className="link">Home / Buy Airtime</div>
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
                        {network.network_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="input-group">
                <label>Amount</label>
                <input
                  type="text"
                  name="username"
                  placeholder="N0.00"
                  value={amount}
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
              <button type="submit" className="btn btn-primary">
                Buy
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyAirtime;
