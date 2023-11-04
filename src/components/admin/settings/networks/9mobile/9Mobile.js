import React from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import LoadingComponent from "../../../../../LoadingComponent";

const NineMobile = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const setNetworkInfo = (newInfo) => {
    setData(newInfo);
  };

  useEffect(() => {
    axios
      .post("/api/network/records", { network_name: "9mobile" })
      .then((response) => {
        const netInfo = response.data;
        setNetworkInfo(netInfo);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching network details:", error);
        setIsLoading(false);
      });

    document.title = "FiveStarsData | 9mobile Settings";
  }, []);

  const [inputs, setInputs] = useState({
    network_id: "",
    network_name: "9mobile",
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

  return (
    <>
      {isLoading === true ? (
        <LoadingComponent />
      ) : (
        <form method="POST" className="form-group" onSubmit={handleSubmit}>
          <ToastContainer />
          <div className="input-group">
            <label>Network ID</label>
            <input
              type="text"
              name="network_id"
              value={inputs.network_id || data[0]?.network_id}
              onChange={handleInput}
              required
            />
          </div>
          <div className="input-group">
            <label>9mobile Airtime</label>
            <select
              name="airtime_status"
              value={inputs.airtime_status || data[0]?.airtime_status}
              onChange={handleInput}
              required
            >
              <option value="">--- Select Option ---</option>
              <option value="Enable">Enable</option>
              <option value="Disable">Disable</option>
            </select>
          </div>
          <div className="input-group">
            <label>9mobile SME</label>
            <select
              name="sme_status"
              value={inputs.sme_status || data[0]?.sme_status}
              onChange={handleInput}
              required
            >
              <option value="">--- Select Option ---</option>
              <option value="Enable">Enable</option>
              <option value="Disable">Disable</option>
            </select>
          </div>
          <div className="input-group">
            <label>9mobile Gifting</label>
            <select
              name="gifting_status"
              value={inputs.gifting_status || data[0]?.gifting_status}
              onChange={handleInput}
              required
            >
              <option value="">--- Select Option ---</option>
              <option value="Enable">Enable</option>
              <option value="Disable">Disable</option>
            </select>
          </div>
          <div className="input-group">
            <label>9mobile Corporate Gifting</label>
            <select
              name="cg_status"
              value={inputs.cg_status || data[0]?.cg_status}
              onChange={handleInput}
              required
            >
              <option value="">--- Select Option ---</option>
              <option value="Enable">Enable</option>
              <option value="Disable">Disable</option>
            </select>
          </div>
          <div className="input-group">
            <label>9mobile Special Data</label>
            <select
              name="special_status"
              value={inputs.special_status || data[0]?.special_status}
              onChange={handleInput}
              required
            >
              <option value="">--- Select Option ---</option>
              <option value="Enable">Enable</option>
              <option value="Disable">Disable</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      )}
    </>
  );
};

export default NineMobile;
