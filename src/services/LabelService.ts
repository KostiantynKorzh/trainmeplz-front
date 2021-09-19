import axios from "axios";
import { URL } from "../utils/Constants";

const getAllLabels = (): Promise<any> => {
  return axios.get(URL + "labels");
};

export default {
  getAllLabels,
};
