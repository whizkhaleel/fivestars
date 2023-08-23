import React from "react";
import "./login.scss";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import jwtDecode from "jwt-decode";
import { useAuth } from "../../auth";
const Login = () => {
  const { setToken } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      username,
      password,
    };

    axios
      .post("/api/login", payload)
      .then((response) => {
        if (response.status === 201) {
          const token = response.data.token;
          setToken(token);
          localStorage.setItem("Token", token);
          const navigate = () => {
            const decode = jwtDecode(token);
            const userRole = decode.userRole;

            const url = userRole === 2 ? "/user/" : "/admin/";

            window.location = url;
          };
          toast.success(`${response.data.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onClose: navigate,
          });
        } else {
          toast.error(`${response.data.message}`, {
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
        toast.error(`${error.message}`, {
          position: "top-center",
          autoClose: 5000,
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
    document.title = "FiveStarsData | Login";
  }, []);

  return (
    <div id="login">
      <ToastContainer />
      <div className="__login">
        <img src={logo} alt="login logo" />
        <h1>Login</h1>
        <hr></hr>
        <form method="POST" className="form-group" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username/Phone no.</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username or phone number"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <Link to="reset" className="link">
            Forgot password?
          </Link>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <div className="register">
            <label>Don't have an account? </label>
            <Link to="/register" className="link">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
