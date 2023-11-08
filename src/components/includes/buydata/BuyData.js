import React from "react";
import "../panel.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingComponent from "../../../LoadingComponent";

const BuyData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [networks, setNetworks] = useState(null);
  const [plans, setPlans] = useState(null);

  useEffect(() => {
    axios
      .post("/api/networks/records")
      .then((response) => {
        const networksInfo = response.data;
        setNetworks(networksInfo);
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
  const [isLoadingPlan, setIsLoadingPlan] = useState(true);

  useEffect(() => {
    if (type) {
      axios
        .post(`/api/dataplans/records/${network}/${type}`)
        .then((response) => {
          const dataPlans = response.data;
          setPlans(dataPlans);
          setIsLoadingPlan(false);
        })
        .catch((error) => {
          console.error("Error fetching data plan details:", error);
          setIsLoadingPlan(false);
        });
    }
  }, [type]);

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
                  <option value="" disabled>
                    --- Select Network ---
                  </option>
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
                <label>Select type</label>
                <select
                  name="type"
                  defaultValue={type}
                  onChange={(event) => setType(event.target.value)}
                >
                  <option value="" disabled>
                    --- Select Type ---
                  </option>
                  <option value="Gifting">Gifting</option>
                  <option value="CG">Corporate Gifting</option>
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
                  <option value="" disabled>
                    --- Select Plan ---
                  </option>
                  {isLoadingPlan === true ? (
                    <option disabled>Loading.....</option>
                  ) : (
                    plans.map((plan) => {
                      return (
                        <option key={plan._id} value={plan.plan_id}>
                          {plan.network_name} - {plan.plan_name} -{" "}
                          {plan.user_price}
                        </option>
                      );
                    })
                  )}
                </select>
              </div>
              <div className="input-group">
                <label>Amount</label>
                <input
                  type="text"
                  name="username"
                  placeholder="N0.00"
                  value={plan ? `N${plan.user_price}.00` : "N0.00"}
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
