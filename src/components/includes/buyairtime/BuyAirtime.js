import React from "react";
import "../panel.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingComponent from "../../../LoadingComponent";
import RequireAuth from "../../../RequireAuth";
import Swal from "sweetalert2";

const BuyAirtime = ({ user }) => {
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
    const user_id = user.userInfo._id;
    const payload = {
      network,
      amount,
      number,
      user_id: user_id,
    };

    const balance = user.accountInfo.balance;
    balance >= parseFloat(amount)
      ? axios
          .post("/api/buyairtime/", payload)
          .then((response) => {
            response.data.Status === "successful"
              ? Swal.fire({
                  title: "Successful Transaction!",
                  text: `You have successfully recharged N${response.data.amount} for ${response.data.mobile_number}`,
                  icon: "success",
                })
              : Swal.fire({
                  title: "Error!",
                  text: "Something went wrong!",
                  icon: "error",
                });
          })
          .catch((error) => {
            console.log(error);
          })
      : Swal.fire({
          title: "Insufficient Funds!",
          text: "Please fund your wallet and try again!",
          icon: "warning",
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

export default RequireAuth(BuyAirtime);
