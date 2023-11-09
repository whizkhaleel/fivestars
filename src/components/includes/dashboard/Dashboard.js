import React, { useState, useEffect, useId } from "react";
import axios from "axios";
import "../panel.scss";
import "./dashboard.scss";
import { Link } from "react-router-dom";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { TbCash } from "react-icons/tb";
import {
  AiOutlineWifi,
  AiOutlineCreditCard,
  AiOutlineHistory,
} from "react-icons/ai";
import Table from "../Table";
import RequireAuth from "../../../RequireAuth";
import { SlWallet } from "react-icons/sl";

const User = ({ user }) => {
  const [records, setRecords] = useState(user.transInfo);

  useEffect(() => {
    document.title = "FiveStarsVTU | User Dashboard";
  }, []);

  const columns = [
    {
      name: "Ref. ID",
      selector: (row) => row.ref,
    },
    {
      name: "Transaction",
      selector: (row) => row.type,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: "Prev. Balance",
      selector: (row) => row.prev,
    },
    {
      name: "New Balance",
      selector: (row) => row.new,
    },
    {
      name: "Date / Time",
      selector: (row) => row.time,
    },
  ];

  const data = records.map((record) => ({
    id: record._id,
    ref: record.ref,
    type: record.product,
    amount: `N${record.amount}`,
    prev: `N${record.prev_balance}`,
    new: `N${record.new_balance}`,
    time: record.paidOn,
  }));
  return (
    <div className="__main">
      <div className="breadcrumb">
        <h1>Dashboard</h1>
        <div className="link">Home / Dashboard</div>
      </div>
      <div className="__account">
        <div className="__info">
          <div className="user">
            <h1>Welcome, {user.userInfo.f_name}</h1>
            <h3>Good Morning!</h3>
            <div className="wallet">
              <div className="balance">
                <SlWallet className="icon" />
                <div>
                  <h1>&#8358;{user.accountInfo.balance}</h1>
                  <h3>Wallet Balance</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="misc">
            <Link to="fund">Fund Wallet</Link>
          </div>
        </div>
        <div className="__help">
          <MdOutlineSupportAgent className="icon" />
          <h1>Support</h1>
          <h2>Need some help?</h2>
          <p>
            Have anything to say to us? Please contact our Support Team on
            Whatsapp.
          </p>
          <Link to="https://wa.me/2348064826628">Contact us</Link>
        </div>
      </div>
      <div className="__container_misc">
        <div className="services">
          <Link to="airtime" className="service">
            <div className="content">
              <BsPhone className="icon" />
              <h1>Airtime</h1>
            </div>
          </Link>
          <Link to="data" className="service">
            <div className="content">
              <AiOutlineWifi className="icon" />
              <h1>Data</h1>
            </div>
          </Link>
          <Link to="datacard" className="service">
            <div className="content">
              <AiOutlineCreditCard className="icon" />
              <h1>Data PIN</h1>
            </div>
          </Link>
          <Link to="convert" className="service hide">
            <div className="content">
              <TbCash className="icon" />
              <h1>Convert Airtime</h1>
            </div>
          </Link>
        </div>
        <div className="transactions">
          <h1>
            <AiOutlineHistory /> Recent Transactions
          </h1>
          <div className="table">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Admin = ({ user }) => {
  const [records, setRecords] = useState(user.transInfo);
  const [apiInfo, setApiInfo] = useState(null);

  useEffect(() => {
    const url = "https://najmadata.com/api/user/";
    const headers = {
      Authorization: "Token 5b79354f045d0a4bfc462c6c0ed10ac2402f8a14",
      "Content-Type": "application/json",
    };

    axios
      .get(url, { headers })
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    document.title = "FiveStarsVTU | Admin Dashboard";
  }, []);

  const columns = [
    {
      name: "Ref. ID",
      selector: (row) => row.ref,
    },
    {
      name: "Transaction",
      selector: (row) => row.type,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: "Prev. Balance",
      selector: (row) => row.prev,
    },
    {
      name: "New Balance",
      selector: (row) => row.new,
    },
    {
      name: "Date / Time",
      selector: (row) => row.time,
    },
  ];

  const data = records.map((record) => ({
    id: record._id,
    ref: record.ref,
    type: record.product,
    amount: `N${record.amount}`,
    prev: `N${record.prev_balance}`,
    new: `N${record.new_balance}`,
    time: record.paidOn,
  }));
  return (
    <div className="__main">
      <div className="breadcrumb">
        <h1>Dashboard</h1>
        <div className="link">Home / Dashboard</div>
      </div>
      <div className="__account">
        <div className="__info">
          <div className="user">
            <h1>Welcome, {user.userInfo.f_name}</h1>
            <h3>Good Morning!</h3>
            <div className="wallet">
              <div className="balance">
                <SlWallet className="icon" />
                <div>
                  <h1>&#8358;{user.accountInfo.balance}</h1>
                  <h3>Wallet Balance</h3>
                </div>
              </div>
              <div className="balance">
                <AiOutlineCreditCard className="icon" />
                <div>
                  <h1>&#8358;{user.accountInfo.balance}</h1>
                  <h3>API Balance</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="misc">
            <Link to="fund">Fund Wallet</Link>
          </div>
        </div>
        <div className="__help">
          <MdOutlineSupportAgent className="icon" />
          <h1>Support</h1>
          <h2>Need some help?</h2>
          <p>
            Have anything to say to us? Please contact our Support Team on
            Whatsapp.
          </p>
          <Link to="https://wa.me/2348064826628">Contact us</Link>
        </div>
      </div>
      <div className="__container_misc">
        <div className="services">
          <Link to="airtime" className="service">
            <div className="content">
              <BsPhone className="icon" />
              <h1>Airtime</h1>
            </div>
          </Link>
          <Link to="data" className="service">
            <div className="content">
              <AiOutlineWifi className="icon" />
              <h1>Data</h1>
            </div>
          </Link>
          <Link to="datacard" className="service">
            <div className="content">
              <AiOutlineCreditCard className="icon" />
              <h1>Data PIN</h1>
            </div>
          </Link>
          <Link to="convert" className="service hide">
            <div className="content">
              <TbCash className="icon" />
              <h1>Convert Airtime</h1>
            </div>
          </Link>
        </div>
        <div className="transactions">
          <h1>
            <AiOutlineHistory /> Recent Transactions
          </h1>
          <div className="table">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

const UserHome = RequireAuth(User);
const AdminHome = RequireAuth(Admin);

export { UserHome, AdminHome };
