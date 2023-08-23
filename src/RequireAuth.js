import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useAuth } from "./auth";
import axios from "axios";
import LoadingComponent from "./LoadingComponent";

const RequireAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const navigate = useNavigate();
    const { setToken } = useAuth();
    const [user, setUser] = useState();
    const [done, setDone] = useState();

    useEffect(() => {
      alert("Hello the token is " + token);
      if (!token) {
        navigate("/login");
      } else {
        try {
          const decodedToken = jwtDecode(token);

          if (Date.now() >= decodedToken.exp * 1000) {
            console.log("Token expired");
            navigate("/login");
          } else {
            const userID = decodedToken.userID;

            axios
              .post(`/api/user/${userID}`)
              .then((response) => {
                setUser(response.data);
                setDone(true);
              })
              .catch((error) => {
                console.error("Error fetching user details:", error);
                navigate("/login");
              });
          }
        } catch (error) {
          console.error("Token verification failed: ", error);
          navigate("/login");
        }
      }
    }, [navigate, token]);

    if (!done) {
      return <LoadingComponent />;
    }

    if (user) {
      return <WrappedComponent {...props} user={user} token={token} />;
    } else {
      return null;
    }
  };

  return AuthenticatedComponent;
};

export default RequireAuth;
