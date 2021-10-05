import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useAuth = () => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/auth");
    }
  }, []);

  return <></>;
};

export default useAuth;
