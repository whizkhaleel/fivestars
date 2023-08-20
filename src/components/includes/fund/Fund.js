import React from "react";
import "../panel.scss";
import "./fund.scss";
import { useEffect } from "react";
import { MdContentCopy } from "react-icons/md";

const Fund = () => {
  useEffect(() => {
    document.title = "FiveStarsData | Login";
  }, []);
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
          <strong>Note:</strong> 2% Charges Applies.
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
                <h2>Five Stars Digital Solutions - Hal</h2>
              </div>
              <div className="info">
                <h1>Account No.: </h1>
                <div className="acc_no">
                  <h2>1546352635</h2>
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
                <h2>Five Stars Digital Solutions - Hal</h2>
              </div>
              <div className="info">
                <h1>Account No.: </h1>
                <div className="acc_no">
                  <h2>1546352635</h2>
                  <MdContentCopy className="copy" />
                </div>
              </div>
            </div>
          </article>
          <article className="providus">
            <div className="bank_card">
              <div className="info">
                <h1>Bank Name: </h1>
                <h2>Providus Bank</h2>
              </div>
              <div className="info">
                <h1>Account Name: </h1>
                <h2>Five Stars Digital Solutions - Hal</h2>
              </div>
              <div className="info">
                <h1>Account No.: </h1>
                <div className="acc_no">
                  <h2>1546352635</h2>
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
