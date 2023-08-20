import React, { useState } from "react";
import "./sidebar.scss";
import { NavLink, Link } from "react-router-dom";
import { TbLayoutDashboard, TbCash, TbPlugConnected } from "react-icons/tb";
import { CiUser, CiDesktop } from "react-icons/ci";
import { SlWallet } from "react-icons/sl";
import {
  AiOutlineWifi,
  AiOutlineCreditCard,
  AiOutlineHistory,
  AiOutlineLogout,
  AiOutlineSetting,
} from "react-icons/ai";

import { BsPhone, BsChevronCompactDown } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { MdSettingsInputAntenna } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

export const SidebarUser = ({ isOpen, setisOpen, sidebarRef }) => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const toggleHistory = () => {
    setIsHistoryOpen(!isHistoryOpen);
  };

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="__sidebar">
      <aside className={isOpen ? "mobile" : ""} ref={sidebarRef}>
        <ul>
          <li>
            <NavLink to="/user/" onClick={() => setisOpen(!isOpen)}>
              <TbLayoutDashboard /> <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="profile" onClick={() => setisOpen(!isOpen)}>
              <CiUser /> <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="fund" onClick={() => setisOpen(!isOpen)}>
              <SlWallet /> <span>Fund Wallet</span>
            </NavLink>
          </li>
        </ul>

        <ul>
          <h1>Transactions</h1>
          <li>
            <NavLink to="data" onClick={() => setisOpen(!isOpen)}>
              <AiOutlineWifi /> <span>Buy Data</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="airtime" onClick={() => setisOpen(!isOpen)}>
              <BsPhone /> <span>Buy Airtime</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="datacard" onClick={() => setisOpen(!isOpen)}>
              <AiOutlineCreditCard /> <span>Data E-PIN</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="convert" onClick={() => setisOpen(!isOpen)}>
              <TbCash /> <span>Airtime to Cash</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="cablesubs" onClick={() => setisOpen(!isOpen)}>
              <CiDesktop /> <span>Cable Subscription</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="bulksms" onClick={() => setisOpen(!isOpen)}>
              <TiMessages /> <span>Bulk SMS</span>
            </NavLink>
          </li>
          <li onClick={toggleHistory}>
            <Link style={{ backgroundColor: "inherit" }}>
              <AiOutlineHistory style={{ color: "GrayText" }} />{" "}
              <span>Transactions History</span>{" "}
              <BsChevronCompactDown
                style={{
                  transform: isHistoryOpen ? "rotate(180deg)" : "",
                  marginLeft: "2.5rem",
                  fontSize: "1.3rem",
                  color: "GrayText",
                }}
              />
            </Link>
          </li>

          {isHistoryOpen && (
            <div className={`dropdown ${isHistoryOpen ? "expand" : ""}`}>
              <ul>
                <li>
                  <NavLink to="fundhistory" onClick={() => setisOpen(!isOpen)}>
                    <SlWallet /> <span>Fund History</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="datahistory" onClick={() => setisOpen(!isOpen)}>
                    <AiOutlineWifi />
                    <span>Data History</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="airtimehistory"
                    onClick={() => setisOpen(!isOpen)}
                  >
                    <BsPhone />
                    <span>Airtime History</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="epinhistory" onClick={() => setisOpen(!isOpen)}>
                    <AiOutlineCreditCard />
                    <span>E-PIN History</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="cablehistory" onClick={() => setisOpen(!isOpen)}>
                    <CiDesktop />
                    <span>Cable History</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </ul>
        <ul className="misc">
          <h1>Miscellaneous</h1>
          <li onClick={toggleSettings}>
            <Link style={{ backgroundColor: "inherit" }}>
              <AiOutlineSetting style={{ color: "GrayText" }} />{" "}
              <span>Settings</span>{" "}
              <BsChevronCompactDown
                style={{
                  transform: isSettingsOpen ? "rotate(180deg)" : "",
                  marginLeft: "3rem",
                  fontSize: "1.3rem",
                  color: "GrayText",
                }}
              />
            </Link>
          </li>
          {isSettingsOpen && (
            <div className={`dropdown ${isSettingsOpen ? "expand" : ""}`}>
              <ul style={{ marginLeft: "-1rem" }}>
                <li>
                  <NavLink to="changepin" onClick={() => setisOpen(!isOpen)}>
                    <SlWallet /> <span>Change PIN</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="changepass" onClick={() => setisOpen(!isOpen)}>
                    <AiOutlineWifi />
                    <span>Change Password</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
          <li>
            <NavLink to="/logout" onClick={() => setisOpen(!isOpen)}>
              <AiOutlineLogout /> <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export const SidebarAdmin = ({ isOpen, sidebarRef }) => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const toggleHistory = () => {
    setIsHistoryOpen(!isHistoryOpen);
  };

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="__sidebar">
      <aside className={isOpen ? "mobile" : ""} ref={sidebarRef}>
        <ul>
          <li>
            <NavLink to="/admin/">
              <TbLayoutDashboard /> <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="profile">
              <CiUser /> <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="fund">
              <SlWallet /> <span>Fund Wallet</span>
            </NavLink>
          </li>
        </ul>

        <ul>
          <h1>Transactions</h1>
          <li>
            <NavLink to="data">
              <AiOutlineWifi /> <span>Buy Data</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="airtime">
              <BsPhone /> <span>Buy Airtime</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="datacard">
              <AiOutlineCreditCard /> <span>Data E-PIN</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="convert">
              <TbCash /> <span>Airtime to Cash</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="cablesubs">
              <CiDesktop /> <span>Cable Subscription</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="bulksms">
              <TiMessages /> <span>Bulk SMS</span>
            </NavLink>
          </li>
          <li onClick={toggleHistory}>
            <Link style={{ backgroundColor: "inherit" }}>
              <AiOutlineHistory style={{ color: "GrayText" }} />{" "}
              <span>Transactions History</span>{" "}
              <BsChevronCompactDown
                style={{
                  transform: isHistoryOpen ? "rotate(180deg)" : "",
                  marginLeft: "3rem",
                  fontSize: "1.3rem",
                  color: "GrayText",
                }}
              />
            </Link>
          </li>

          {isHistoryOpen && (
            <div className={`dropdown ${isHistoryOpen ? "expand" : ""}`}>
              <ul>
                <li>
                  <NavLink to="fundhistory">
                    <SlWallet /> <span>Fund History</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="datahistory">
                    <AiOutlineWifi />
                    <span>Data History</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="airtimehistory">
                    <BsPhone />
                    <span>Airtime History</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="epinhistory">
                    <AiOutlineCreditCard />
                    <span>E-PIN History</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="cablehistory">
                    <CiDesktop />
                    <span>Cable History</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </ul>

        <ul className="misc">
          <h1>Miscellaneous</h1>
          <li onClick={toggleSettings}>
            <Link style={{ backgroundColor: "inherit" }}>
              <AiOutlineSetting style={{ color: "GrayText" }} />{" "}
              <span>Settings</span>{" "}
              <BsChevronCompactDown
                style={{
                  transform: isSettingsOpen ? "rotate(180deg)" : "",
                  marginLeft: "3rem",
                  fontSize: "1.3rem",
                  color: "GrayText",
                }}
              />
            </Link>
          </li>
          {isSettingsOpen && (
            <div className={`dropdown ${isSettingsOpen ? "expand" : ""}`}>
              <ul>
                <li>
                  <NavLink to="sitesettings">
                    <FiSettings />
                    <span>Site Settings</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="apisettings">
                    <TbPlugConnected /> <span>API Settings</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="services">
                    <MdSettingsInputAntenna />
                    <span>Services</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
          <li>
            <NavLink to="/logout">
              <AiOutlineLogout /> <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};
