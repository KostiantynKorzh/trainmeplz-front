import axios from "axios";
import { URL } from "../utils/Constants";

const sendDataToServer = (label: string, imageData: any): Promise<any> => {
  const data = new FormData();
  data.append("file", imageData.originFileObj);
  data.append("filename", label);

  console.log(data.get("file"));

  return axios.post(URL + "trains?label=" + label, data, {
    headers: { "content-type": "multipart/form-data" },
  });
};

export default {
  sendDataToServer,
};
