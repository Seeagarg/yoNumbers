import React, { useEffect } from "react";
import { getCookie } from "../utils/helper";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const value = getCookie("msisdn");
    if (!value) {
      navigate("/login");
    }
  }, []);
  return <div>{children}</div>;
};

export default Auth;
