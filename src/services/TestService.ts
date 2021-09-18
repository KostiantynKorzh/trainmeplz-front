import axios from "axios";
import { URL } from "../utils/Constants";

const sendDataToServer = (label: string, imageData: any): Promise<any> => {
  const data = new FormData();
  data.append("file", imageData.originFileObj);
  data.append("filename", label);

  console.log(data.get("file"));

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

const sendTestImage = (imageData: any): Promise<any> => {
  const data = new FormData();
  data.append("file", imageData.originFileObj);
  data.append("filename", "test");

  return axios.post(URL + "/test", data, {
    headers: { "content-type": "multipart/form-data" },
  });
};

export default {
  sendDataToServer,
  getAllLabels,
  getImageStats,
  sendTestImage,
};
