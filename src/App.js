import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Notfound from "./components/notfound/Notfound";
import AdminDashboard from "./components/admin/dashboard/Dashboard";
import UserDashboard from "./components/user/dashboard/Dashboard";
import { AdminHome, UserHome } from "./components/includes/dashboard/Dashboard";
import Register from "./components/register/Register";
import BuyAirtime from "./components/includes/buyairtime/BuyAirtime";
import BuyData from "./components/includes/buydata/BuyData";
import DataCard from "./components/includes/datacard/DataCard";
import CableSubs from "./components/includes/cable/CableSubs";
import ChangePass from "./components/includes/changepass/ChangePass";
import ChangePin from "./components/includes/changepin/ChangePin";
import ApiSettings from "./components/admin/apisettings/ApiSettings";
import Monnify from "./components/admin/apisettings/monnify/Monnify";
import ApiEndpoints from "./components/admin/apisettings/apiendpoints/ApiEndpoints";
import Settings from "./components/admin/settings/Settings";
import General from "./components/admin/settings/general/General";
import Networks from "./components/admin/settings/networks/Networks";
import MTN from "./components/admin/settings/networks/mtn/MTN";
import Airtel from "./components/admin/settings/networks/airtel/Airtel";
import Glo from "./components/admin/settings/networks/glo/Glo";
import NineMobile from "./components/admin/settings/networks/9mobile/9Mobile";
import Services from "./components/admin/services/Services";
import Data from "./components/admin/services/data/Data";
import DataCoupons from "./components/admin/services/datacoupons/DataCoupons";
import Fund from "./components/includes/fund/Fund";
import Profile from "./components/includes/profile/Profile";
import FundHistory from "./components/includes/history/fundhistory/FundHistory";
import AirtimeHistory from "./components/includes/history/airtimehistory/AirtimeHistory";
import DataHistory from "./components/includes/history/datahistory/DataHistory";
import EpinHistory from "./components/includes/history/epinhistory/EpinHistory";
import CableHistory from "./components/includes/history/cablehistory/CableHistory";
import { AuthProvider } from "./auth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <AuthProvider>
            <Login />
          </AuthProvider>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<UserDashboard />}>
        <Route index element={<UserHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="fund" element={<Fund />} />
        <Route path="airtime" element={<BuyAirtime />} />
        <Route path="data" element={<BuyData />} />
        <Route path="datacard" element={<DataCard />} />
        <Route path="cablesubs" element={<CableSubs />} />
        <Route path="fundhistory" element={<FundHistory />} />
        <Route path="airtimehistory" element={<AirtimeHistory />} />
        <Route path="datahistory" element={<DataHistory />} />
        <Route path="epinhistory" element={<EpinHistory />} />
        <Route path="cablehistory" element={<CableHistory />} />
        <Route path="changepin" element={<ChangePin />} />
        <Route path="changepass" element={<ChangePass />} />
        <Route path="*" element={<Notfound />} />
      </Route>
      <Route path="/admin" element={<AdminDashboard />}>
        <Route index element={<AdminHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="fund" element={<Fund />} />
        <Route path="airtime" element={<BuyAirtime />} />
        <Route path="data" element={<BuyData />} />
        <Route path="datacard" element={<DataCard />} />
        <Route path="cablesubs" element={<CableSubs />} />
        <Route path="fundhistory" element={<FundHistory />} />
        <Route path="airtimehistory" element={<AirtimeHistory />} />
        <Route path="datahistory" element={<DataHistory />} />
        <Route path="epinhistory" element={<EpinHistory />} />
        <Route path="cablehistory" element={<CableHistory />} />
        <Route path="changepin" element={<ChangePin />} />
        <Route path="changepass" element={<ChangePass />} />
        <Route path="apisettings" element={<ApiSettings />}>
          <Route path="monnify" element={<Monnify />} />
          <Route path="apiendpoints" element={<ApiEndpoints />} />
        </Route>
        <Route path="sitesettings" element={<Settings />}>
          <Route path="general" element={<General />} />
          <Route path="networks" element={<Networks />}>
            <Route path="mtn" element={<MTN />} />
            <Route path="airtel" element={<Airtel />} />
            <Route path="glo" element={<Glo />} />
            <Route path="9mobile" element={<NineMobile />} />
          </Route>
        </Route>
        <Route path="services" element={<Services />}>
          <Route path="data" element={<Data />} />
          <Route path="datacoupons" element={<DataCoupons />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default App;
