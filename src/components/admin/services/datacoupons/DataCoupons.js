import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./datacoupons.scss";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { AddDataCoupon, EditDataCoupon } from "../../models/Models";

const DataCoupons = () => {
  useEffect(() => {
    $(document).ready(() => {
      $("#dataPlans").DataTable();
    });
  }, []);

  const [isAddCoupon, setIsAddCoupon] = useState(false);
  const [isEditCoupon, setIsEditCoupon] = useState(false);

  return (
    <>
      <AddDataCoupon isOpen={isAddCoupon} setIsOpen={setIsAddCoupon} />
      <EditDataCoupon isOpen={isEditCoupon} setIsOpen={setIsEditCoupon} />
      <div className="panel_container">
        <div className="__header">
          <h1>All Data E-PINs</h1>
          <button
            className="btn btn-primary"
            onClick={() => setIsAddCoupon(true)}
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
                  <th>PIN ID</th>
                  <th>PIN Name</th>
                  <th>PIN Network</th>
                  <th>PIN Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>24</td>
                  <td>1.5 GB</td>
                  <td>MTN</td>
                  <td>N300</td>
                  <td className="btns">
                    <Link
                      className="edit"
                      onClick={() => setIsEditCoupon(true)}
                    >
                      <BsPencil />
                    </Link>
                    <Link className="delete">
                      <AiOutlineDelete />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>28</td>
                  <td>750 MB</td>
                  <td>MTN</td>
                  <td>N150</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataCoupons;
