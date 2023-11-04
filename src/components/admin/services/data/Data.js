import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./data.scss";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { AddPlan, EditPlan } from "../../models/Models";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import LoadingComponent from "../../../../LoadingComponent";

const Data = () => {
  useEffect(() => {
    $(document).ready(() => {
      $("#dataPlans").DataTable();
    });
  }, []);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const setDataPlans = (newInfo) => {
    setData(newInfo);
  };

  useEffect(() => {
    axios
      .post("/api/dataplans/records")
      .then((response) => {
        const dataPlans = response.data;
        setDataPlans(dataPlans);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data plans details:", error);
        setIsLoading(false);
      });

    document.title = "FiveStarsData | Data Plans";
  }, []);

  const [isAddPlan, setIsAddPlan] = useState(false);
  const [isEditPlan, setIsEditPlan] = useState(false);

  return (
    <>
      {isLoading === true ? (
        <LoadingComponent />
      ) : (
        <>
          <AddPlan isOpen={isAddPlan} setIsOpen={setIsAddPlan} />
          <EditPlan isOpen={isEditPlan} setIsOpen={setIsEditPlan} />
          <div className="panel_container">
            <div className="__header">
              <h1>All Data Plans</h1>
              <button
                className="btn btn-primary"
                onClick={() => setIsAddPlan(true)}
              >
                Add
              </button>
            </div>
            <div className="dataPlans">
              <div className="table">
                <table id="dataPlans">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Plan ID</th>
                      <th>Plan Name</th>
                      <th>Plan Type</th>
                      <th>Plan Network</th>
                      <th>Plan Price</th>
                      <th>Selling Price</th>
                      <th>Validity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((plan, i) => (
                      <tr key={plan._id}>
                        <td>{i + 1}</td>
                        <td>{plan.plan_id}</td>
                        <td>{plan.plan_name}</td>
                        <td>{plan.plan_type}</td>
                        <td>{plan.network_name}</td>
                        <td>{plan.buying_price}</td>
                        <td>{plan.user_price}</td>
                        <td>{plan.validity_days + " days"}</td>
                        <td className="btns">
                          <Link
                            className="edit"
                            onClick={() => setIsEditPlan(true)}
                          >
                            <BsPencil />
                          </Link>
                          <Link className="delete">
                            <AiOutlineDelete />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Data;
