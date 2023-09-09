import React from "react";
import DataTable from "react-data-table-component";
import "./table.scss";

const Table = ({ columns, data }) => {
  return (
    <div className="table">
      <DataTable columns={columns} data={data} fixedHeader pagination />
    </div>
  );
};

export default Table;
