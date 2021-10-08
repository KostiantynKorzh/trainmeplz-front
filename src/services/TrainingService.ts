import axios from "axios";
import { REACT_APP_BACK_URL } from "../common/Constants";

const sendDataToServer = (label: string, imageData: any): Promise<any> => {
  const data = new FormData();
  data.append("file", imageData.originFileObj);
  data.append("filename", label);

  return axios.post(REACT_APP_BACK_URL + "trainings?label=" + label, data, {
    headers: { "content-type": "multipart/form-data" },
  });
};

export default {
  sendDataToServer,
};
