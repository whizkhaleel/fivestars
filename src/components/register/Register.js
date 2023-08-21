import React from "react";
import "./register.scss";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    cpassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const isFormValid = () => {
    return (
      inputs.password === inputs.cpassword &&
      inputs.password !== "" &&
      inputs.password.length >= 8 &&
      inputs.firstname !== "" &&
      inputs.lastname !== "" &&
      inputs.email !== "" &&
      inputs.phone !== "" &&
      inputs.username !== ""
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      firstname: inputs.firstname,
      lastname: inputs.lastname,
      email: inputs.email,
      phone: inputs.phone,
      username: inputs.username,
      password: inputs.password,
    };

    axios
      .post("https://fivestarsvtu.onrender.com/api/register", payload)
      .then((response) => {
        if (response.status === 201) {
          toast.success(`${response.data.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (response.status === 500) {
          toast.error("Something went wrong!", {
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.warning(`${response.data.message}`, {
            position: "top-center",
            autoClose: 5000,
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
      });
  };

  useEffect(() => {
    document.title = "FiveStarsData | Register";
  }, []);

  return (
    <div id="register">
      <ToastContainer />
      <div className="__register">
        <img src={logo} alt="register logo" />
        <h1>Register</h1>
        <p>
          Please fill in the form below to register a new account and gain full
          access to our services.
        </p>
        <form method="POST" className="form-group" onSubmit={handleSubmit}>
          <div className="inline-input">
            <div className="input-group">
              <label>Firstname</label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter your firstname"
                value={inputs.firstname}
                onChange={handleInput}
                required
              />
            </div>
            <div className="input-group">
              <label>Lastname</label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter your lastname"
                value={inputs.lastname}
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <div className="inline-input">
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={inputs.email}
                onChange={handleInput}
                required
              />
            </div>
            <div className="input-group">
              <label>Phone no.</label>
              <input
                type="number"
                name="phone"
                placeholder="Enter your phone number"
                value={inputs.phone}
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Choose a username"
              value={inputs.username}
              onChange={handleInput}
              required
            />
          </div>
          <div className="inline-input">
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Choose a password"
                value={inputs.password}
                onChange={handleInput}
                required
              />
              <label
                className="hint"
                style={{ color: inputs.password.length >= 8 ? "green" : "red" }}
              >
                {inputs.password.length >= 8 ? (
                  <AiOutlineCheckCircle />
                ) : (
                  <FaRegTimesCircle />
                )}{" "}
                Min. Lenght: 8 characters
              </label>
            </div>
            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                placeholder="Confirm password"
                value={inputs.cpassword}
                onChange={handleInput}
                required
              />
              {inputs.password !== inputs.cpassword ? (
                <label className="hint" style={{ color: "red" }}>
                  <FaRegTimesCircle /> Password do not match!
                </label>
              ) : inputs.cpassword !== "" &&
                inputs.cpassword === inputs.password ? (
                <label className="hint" style={{ color: "green" }}>
                  <AiOutlineCheckCircle /> Password matched.
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="input-group">
            <label>Referral Username [Optional]</label>
            <input
              type="text"
              name="referrer"
              placeholder="Enter your referrer username"
            />
            <label className="hint">Leave blank if no referral</label>
          </div>
          <div className="input-check">
            <input type="checkbox" name="terms" required />
            <label>I agree to the terms and conditions.</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isFormValid()}
            style={{ backgroundColor: !isFormValid() ? "grey" : "" }}
          >
            Register
          </button>
          <div className="register">
            <label>Already have an account? </label>
            <Link to="/login" className="link">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
