import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { UseAuth } from "./auth";
import axios from "axios";
import LoadingComponent from "./LoadingComponent";

const RequireAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const navigate = useNavigate();
    const { token } = UseAuth();
    const [user, setUser] = useState();
    const [done, setDone] = useState();
      
        

 

  return AuthenticatedComponent;
};

export default RequireAuth;
