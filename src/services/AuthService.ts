import axios, { AxiosResponse } from "axios";
import { REACT_APP_BACK_URL } from "../common/Constants";

const AUTH_URL = REACT_APP_BACK_URL + "auth";

const login = (
  username: string,
  password: string
): Promise<AxiosResponse<string>> => {
  return axios.post(AUTH_URL, {
    username,
    password,
  });
};

const logout = (): void => {
  localStorage.removeItem("token");
};

const validateToken = (): Promise<AxiosResponse<string>> => {
  return axios.get(AUTH_URL + "?token=" + localStorage.getItem("token"));
};

export default {
  login,
  logout,
  validateToken,
};
