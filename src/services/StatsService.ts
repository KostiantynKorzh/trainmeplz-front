import axios from "axios";
import { URL } from "../utils/Constants";

const getImageStats = (): Promise<any> => {
  return axios.get(URL + "stats/images");
};

export default {
  getImageStats,
};