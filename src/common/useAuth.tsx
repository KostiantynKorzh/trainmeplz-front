import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../services/AuthService";

const useAuth = () => {
  const history = useHistory();

  useEffect(() => {
    AuthService.validateToken()
      .then(console.log)
      .catch(() => history.push("/auth"));
  }, []);

  return <></>;
};

export default useAuth;
