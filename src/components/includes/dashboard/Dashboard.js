import React, { useEffect } from "react";
import "../panel.scss";
import "./dashboard.scss";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { TbCash } from "react-icons/tb";
import {
  AiOutlineWifi,
  AiOutlineCreditCard,
  AiOutlineHistory,
} from "react-icons/ai";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import RequireAuth from "../../../RequireAuth";

const User = ({ user }) => {
  useEffect(() => {
    $(document).ready(() => {
      $("#transactions").DataTable();
    });
  }, []);

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
                <AiOutlineCreditCard className="icon" />
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
            <table id="transactions">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Transaction</th>
                  <th>Prev. Balance</th>
                  <th>New Balance</th>
                  <th>Date / Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FSD-25223572657</td>
                  <td>N1020 Airtime</td>
                  <td>N3645.5</td>
                  <td>N3245.5</td>
                  <td>21/07/2023 / 10:32AM</td>
                </tr>
                <tr>
                  <td>FSD-25223572657</td>
                  <td>1GB MTN Data</td>
                  <td>N3645.5</td>
                  <td>N3245.5</td>
                  <td>21/07/2023 / 10:32AM</td>
                </tr>
                <tr>
                  <td>FSD-25223572657</td>
                  <td>N500 Wallet Funding</td>
                  <td>N3645.5</td>
                  <td>N3245.5</td>
                  <td>21/07/2023 / 10:32AM</td>
                </tr>
                <tr>
                  <td>FSD-25223572657</td>
                  <td>5G Airtel Data</td>
                  <td>N3645.5</td>
                  <td>N3245.5</td>
                  <td>21/07/2023 / 10:32AM</td>
                </tr>
                <tr>
                  <td>FSD-25223572657</td>
                  <td>Airtime</td>
                  <td>N3645.5</td>
                  <td>N3245.5</td>
                  <td>21/07/2023 / 10:32AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const Admin = ({ user }) => {
  useEffect(() => {
    $(document).ready(() => {
      $("#transactions").DataTable();
    });
  }, []);
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
                <AiOutlineCreditCard className="icon" />
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
            <table id="transactions">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Transaction</th>
                  <th>Prev. Balance</th>
                  <th>New Balance</th>
                  <th>Date / Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FSD-25223572657</td>
                  <td>N1020 Airtime</td>
                  <td>N3645.5</td>
                  <td>N3245.5</td>
                  <td>21/07/2023 / 10:32AM</td>
                </tr>
                <tr>
                  <td>FSD-25223572657</td>
                  <td>1GB MTN Data</td>
                  <td>N3645.5</td>
                  <td>N3245.5</td>
                  <td>21/07/2023 / 10:32AM</td>
                </tr>
                <tr>
                  <td>FSD-25223572657</td>
                  <td>N500 Wallet Funding</td>
                  <td>N3645.5</td>
                  <td>N3245.5</td>
                  <td>21/07/2023 / 10:32AM</td>
                </tr>
                <tr>
                  <td>FSD-25223572657</td>
                  <td>5G Airtel Data</td>
                  <td>N3645.5</td>
                  <td>N3245.5</td>
                  <td>21/07/2023 / 10:32AM</td>
                </tr>
                <tr>
                  <td>FSD-25223572657</td>
                  <td>Airtime</td>
                  <td>N3645.5</td>
                  <td>N3245.5</td>
                  <td>21/07/2023 / 10:32AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserHome = RequireAuth(User);
const AdminHome = RequireAuth(Admin);

export { UserHome, AdminHome };
