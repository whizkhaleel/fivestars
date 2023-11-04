import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const MTN = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [inputs, setInputs] = useState({
    network_id: "",
    network_name: "MTN",
    airtime_status: "",
    sme_status: "",
    gifting_status: "",
    cg_status: "",
    special_status: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      network_id: inputs.network_id,
      network_name: inputs.network_name,
      airtime_status: inputs.airtime_status,
      sme_status: inputs.sme_status,
      gifting_status: inputs.gifting_status,
      cg_status: inputs.cg_status,
      special_status: inputs.special_status,
    };

    axios
      .post("/api/network/settings", payload)
      .then((response) => {
        if (response.status === 201) {
          toast.success(`${response.data.message}`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error(`${response.data.message}`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${error.message}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  useEffect(() => {
    axios
      .post("/api/api_endpoints/records")
      .then((response) => {
        const monInfo = response.data;
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching monnify details:", error);
        setIsLoading(false);
      });

    document.title = "FiveStarsData | MTN Settings";
  }, []);
  return (
    <form method="POST" className="form-group" onSubmit={handleSubmit}>
      <div className="input-group">
        <label>Network ID</label>
        <input
          type="text"
          name="network_id"
          value={inputs.network_id}
          onChange={handleInput}
        />
      </div>
      <div className="input-group">
        <label>MTN Airtime</label>
        <select
          name="airtime_status"
          value={inputs.airtime_status}
          onChange={handleInput}
        >
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>MTN SME</label>
        <select
          name="sme_status"
          value={inputs.sme_status}
          onChange={handleInput}
        >
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>MTN Gifting</label>
        <select
          name="gifting_status"
          value={inputs.gifting_status}
          onChange={handleInput}
        >
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>MTN Corporate Gifting</label>
        <select
          name="cg_status"
          value={inputs.cg_status}
          onChange={handleInput}
        >
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <div className="input-group">
        <label>MTN Special Data</label>
        <select
          name="special_status"
          value={inputs.special_status}
          onChange={handleInput}
        >
          <option value="Enable">Enable</option>
          <option value="Disable">Disable</option>
        </select>
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  );
};

export default MTN;
