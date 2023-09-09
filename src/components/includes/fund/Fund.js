import React from "react";
import "../panel.scss";
import "./fund.scss";
import { useEffect } from "react";
import { MdContentCopy } from "react-icons/md";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useState } from "react";

const Fund = () => {
  const token = localStorage.getItem("Token");
  const [accountInfo, setAccountInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const decodedToken = jwtDecode(token);
        const userID = decodedToken.userID;

        const response = await axios.post(`/api/user/wallet/${userID}`);

        setAccountInfo(response.data);

        document.title = "FiveStarsData | Fund Wallet";
      } catch (error) {
        console.error("Error fetching user account details:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="__main">
      <div className="breadcrumb">
        <h1>Fund Wallet</h1>
        <div className="link">Home / Fund Wallet</div>
      </div>
      <div className="__panel">
        <h1>Automated Bank Transfer</h1>
        <article>
          Make a transfer to any of the following reserved accounts, and your
          wallet will be funded automatically.
        </article>
        <article>
          <strong>Note:</strong> 1.08% Charges Applies.
        </article>
        <div className="bank_cards">
          <article className="moniepoint">
            <div className="bank_card">
              <div className="info">
                <h1>Bank Name: </h1>
                <h2>Moniepoint</h2>
              </div>
              <div className="info">
                <h1>Account Name: </h1>
                <h2>
                  Five Stars Digital Solutions - {accountInfo.account_name}
                </h2>
              </div>
              <div className="info">
                <h1>Account No.: </h1>
                <div className="acc_no">
                  <h2>{accountInfo.moniepoint_mfb}</h2>
                  <MdContentCopy className="copy" />
                </div>
              </div>
            </div>
          </article>
          <article className="wema">
            <div className="bank_card">
              <div className="info">
                <h1>Bank Name: </h1>
                <h2>Wema Bank</h2>
              </div>
              <div className="info">
                <h1>Account Name: </h1>
                <h2>
                  Five Stars Digital Solutions - {accountInfo.account_name}
                </h2>
              </div>
              <div className="info">
                <h1>Account No.: </h1>
                <div className="acc_no">
                  <h2>{accountInfo.wema_bank}</h2>
                  <MdContentCopy className="copy" />
                </div>
              </div>
            </div>
          </article>
          <article className="sterling">
            <div className="bank_card">
              <div className="info">
                <h1>Bank Name: </h1>
                <h2>Sterling Bank</h2>
              </div>
              <div className="info">
                <h1>Account Name: </h1>
                <h2>
                  Five Stars Digital Solutions - {accountInfo.account_name}
                </h2>
              </div>
              <div className="info">
                <h1>Account No.: </h1>
                <div className="acc_no">
                  <h2>{accountInfo.sterling_bank}</h2>
                  <MdContentCopy className="copy" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Fund;
