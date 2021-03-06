import axios from "axios";
import { REACT_APP_BACK_URL } from "../common/Constants";

const getImageStats = (): Promise<any> => {
  return axios.get(REACT_APP_BACK_URL + "stats/images");
};

export default {
  getImageStats,
};
