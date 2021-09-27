import axios from "axios";
import { REACT_APP_BACK_URL } from "../common/Constants";

const getAllLabels = (): Promise<any> => {
  return axios.get(REACT_APP_BACK_URL + "labels");
};

export default {
  getAllLabels,
};
