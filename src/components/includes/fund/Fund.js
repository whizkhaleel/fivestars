import React from "react";
import "../panel.scss";
import "./fund.scss";
import { useState, useEffect } from "react";
import { MdContentCopy } from "react-icons/md";
import axios from "axios";
import jwtDecode from "jwt-decode";
import LoadingComponent from "../../../LoadingComponent";

const Fund = () => {
  const token = localStorage.getItem("Token");
  const [accountInfo, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const setAccountInfo = (newInfo) => {
    setInfo(newInfo);
  };
  useEffect(() => {
    const decodedToken = jwtDecode(token);
    const userID = decodedToken.userID;

    axios
      .post(`/api/user/wallet/${userID}`)
      .then((response) => {
        const accInfo = response.data;
        setAccountInfo(accInfo);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user account details:", error);
      });

    document.title = "FiveStarsData | Fund Wallet";
  }, [token]);

  const copyMoniepoint = () => {
    const textToCopy = accountInfo.moniepoint_mfb;
    navigator.clipboard.writeText(textToCopy);
  };

  const copyWema = () => {
    const textToCopy = accountInfo.wema_bank;
    navigator.clipboard.writeText(textToCopy);
  };

  const copySterling = () => {
    const textToCopy = accountInfo.sterling_bank;
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <>
      {isLoading === false ? (
        <div className="__main">
          <div className="breadcrumb">
            <h1>Fund Wallet</h1>
            <div className="link">Home / Fund Wallet</div>
          </div>
          <div className="__panel">
            <h1>Automated Bank Transfer</h1>
            <article>
              Make a transfer to any of the following reserved accounts, and
              your wallet will be funded automatically.
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
                      <h2 className="ac-no" id="moniepoint">
                        {accountInfo.moniepoint_mfb}
                      </h2>
                      <span className="copy" onClick={copyMoniepoint()}>
                        <MdContentCopy />
                      </span>
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
                      <h2 className="ac-no" id="wema">
                        {accountInfo.wema_bank}
                      </h2>
                      <span className="copy" onClick={copyWema()}>
                        <MdContentCopy />
                      </span>
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
                      <h2 className="ac-no" id="sterling">
                        {accountInfo.sterling_bank}
                      </h2>
                      <span className="copy" onClick={copySterling()}>
                        <MdContentCopy />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
};

export default Fund;
