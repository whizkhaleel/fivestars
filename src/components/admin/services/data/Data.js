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

const Data = () => {
  useEffect(() => {
    $(document).ready(() => {
      $("#dataPlans").DataTable();
    });
  }, []);

  const [isAddPlan, setIsAddPlan] = useState(false);
  const [isEditPlan, setIsEditPlan] = useState(false);

  return (
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>243</td>
                  <td>1.0 GB</td>
                  <td>Corporate Gifting</td>
                  <td>MTN</td>
                  <td>N235</td>
                  <td className="btns">
                    <Link className="edit" onClick={() => setIsEditPlan(true)}>
                      <BsPencil />
                    </Link>
                    <Link className="delete">
                      <AiOutlineDelete />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>248</td>
                  <td>2.0 GB</td>
                  <td>Corporate Gifting</td>
                  <td>MTN</td>
                  <td>N470</td>
                  <td className="btns">
                    <Link className="edit">
                      <BsPencil />
                    </Link>
                    <Link className="delete">
                      <AiOutlineDelete />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>241</td>
                  <td>500 MB</td>
                  <td>Corporate Gifting</td>
                  <td>MTN</td>
                  <td>N118</td>
                  <td className="btns">
                    <Link className="edit">
                      <BsPencil />
                    </Link>
                    <Link className="delete">
                      <AiOutlineDelete />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>249</td>
                  <td>3.0 GB</td>
                  <td>Corporate Gifting</td>
                  <td>MTN</td>
                  <td>N700</td>
                  <td className="btns">
                    <Link className="edit">
                      <BsPencil />
                    </Link>
                    <Link className="delete">
                      <AiOutlineDelete />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>187</td>
                  <td>10.0 GB</td>
                  <td>Corporate Gifting</td>
                  <td>MTN</td>
                  <td>N2475</td>
                  <td className="btns">
                    <Link className="edit" onClick={() => setIsEditPlan(true)}>
                      <BsPencil />
                    </Link>
                    <Link className="delete">
                      <AiOutlineDelete />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
