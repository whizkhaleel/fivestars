import React, { useState, useEffect } from "react";
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
  const [records, setRecord] = useState(null);
  const userID = user._id;

  const setRecordsInfo = (newInfo) => {
    setRecord(newInfo);
  };
  useEffect(() => {
    axios
      .post(`/api/user/transactions/${userID}`)
      .then((response) => {
        const recordInfo = response.data;
        setRecordsInfo(recordInfo);
      })
      .catch((error) => {
        console.error("Error fetching user transaction records:", error);
      });
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
    prev: record.prev_balance,
    new: record.new_balance,
    time: record.paidOn,
  }));

  // const data = [
  //   {
  //     id: 1,
  //     ref: "25223572657",
  //     type: "N250 MTN Airtime",
  //     prev: "N3000.43",
  //     new: "N2750.43",
  //     time: "September 9, 2023 08:32AM",
  //   },
  //   {
  //     id: 2,
  //     ref: "25223572657",
  //     type: "N250 MTN Airtime",
  //     prev: "N3000.43",
  //     new: "N2750.43",
  //     time: "September 9, 2023 08:32AM",
  //   },
  //   {
  //     id: 3,
  //     ref: "25223572657",
  //     type: "N250 MTN Airtime",
  //     prev: "N3000.43",
  //     new: "N2750.43",
  //     time: "September 9, 2023 08:32AM",
  //   },
  //   {
  //     id: 4,
  //     ref: "25223572657",
  //     type: "N250 MTN Airtime",
  //     prev: "N3000.43",
  //     new: "N2750.43",
  //     time: "September 9, 2023 08:32AM",
  //   },
  //   {
  //     id: 5,
  //     ref: "25223572657",
  //     type: "N250 MTN Airtime",
  //     prev: "N3000.43",
  //     new: "N2750.43",
  //     time: "September 9, 2023 08:32AM",
  //   },
  // ];

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
  useEffect(() => {}, []);
  const columns = [
    {
      name: "Transaction ID",
      selector: (row) => row.ref,
    },
    {
      name: "Transaction",
      selector: (row) => row.type,
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

  const data = [
    {
      id: 1,
      ref: "25223572657",
      type: "N250 MTN Airtime",
      prev: "N3000.43",
      new: "N2750.43",
      time: "September 9, 2023 08:32AM",
    },
    {
      id: 2,
      ref: "25223572657",
      type: "N250 MTN Airtime",
      prev: "N3000.43",
      new: "N2750.43",
      time: "September 9, 2023 08:32AM",
    },
    {
      id: 3,
      ref: "25223572657",
      type: "N250 MTN Airtime",
      prev: "N3000.43",
      new: "N2750.43",
      time: "September 9, 2023 08:32AM",
    },
    {
      id: 4,
      ref: "25223572657",
      type: "N250 MTN Airtime",
      prev: "N3000.43",
      new: "N2750.43",
      time: "September 9, 2023 08:32AM",
    },
    {
      id: 5,
      ref: "25223572657",
      type: "N250 MTN Airtime",
      prev: "N3000.43",
      new: "N2750.43",
      time: "September 9, 2023 08:32AM",
    },
  ];
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
            <BsPhone className="icon" />
            <h1>Airtime</h1>
          </Link>
          <Link to="data" className="service">
            <AiOutlineWifi className="icon" />
            <h1>Data</h1>
          </Link>
          <Link to="datacard" className="service">
            <AiOutlineCreditCard className="icon" />
            <h1>Data PIN</h1>
          </Link>
          <Link to="convert" className="service hide">
            <TbCash className="icon" />
            <h1>Convert Airtime</h1>
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
