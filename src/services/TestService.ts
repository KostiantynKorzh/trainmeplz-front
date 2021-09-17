import axios from "axios";
import { URL } from "../utils/Constants";

const sendDataToServer = (label: string, imageData: any): Promise<any> => {
  const data = new FormData();
  data.append("file", imageData);
  data.append("filename", label);
  data.append("label", label);

  console.log("from service:", label, data);
  return axios.post(URL + "?label=" + label, data, {
    headers: { "content-type": "multipart/form-data" },
  });
};

const getAllLabels = (): Promise<any> => {
  return axios.get(URL + "labels");
};

const getImageStats = (): Promise<any> => {
  return axios.get(URL + "images");
};

export default {
  sendDataToServer,
  getAllLabels,
  getImageStats,
};
