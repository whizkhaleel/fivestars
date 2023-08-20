import React from "react";
import "../../panel.scss";
import "../../table.scss";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { useEffect } from "react";
import Axios from "axios";

const AirtimeHistory = () => {
  useEffect(() => {
    $(document).ready(() => {
      $("#airtime").DataTable();
    });

    const data = {
      userId: 1,
      type: "data",
    };
    Axios.get("/history", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="__main">
      <div className="breadcrumb">
        <h1>Airtime History</h1>
        <div className="link">Home / Airtime History</div>
      </div>
      <div className="__panel">
        <div className="panel_container">
          <div className="__header">
            <h1>All Airtime Transactions</h1>
          </div>

          <div className="table_wrapper">
            <div className="table">
              <table id="airtime">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Transaction ID</th>
                    <th>Network</th>
                    <th>Amount</th>
                    <th>Recipient</th>
                    <th>Status</th>
                    <th>Balance Before</th>
                    <th>Balance After</th>
                    <th>Date / Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>24</td>
                    <td>1.5 GB</td>
                    <td>MTN</td>
                    <td>N300</td>
                    <td>N300</td>
                    <td>N300</td>
                    <td>N300</td>
                    <td>N300</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>28</td>
                    <td>750 MB</td>
                    <td>MTN</td>
                    <td>N150</td>
                    <td>N300</td>
                    <td>N300</td>
                    <td>N300</td>
                    <td>N300</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>241</td>
                    <td>500 MB</td>
                    <td>MTN</td>
                    <td>N118</td>
                    <td>N300</td>
                    <td>N300</td>
                    <td>N300</td>
                    <td>N300</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AirtimeHistory;
