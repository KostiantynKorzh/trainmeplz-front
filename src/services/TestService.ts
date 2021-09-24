import axios from "axios";
import { REACT_APP_BACK_URL } from "../utils/Constants";

const sendTestImage = (imageData: any): Promise<any> => {
  const data = new FormData();
  data.append("file", imageData.originFileObj);
  data.append("filename", "test");

  return axios.post(REACT_APP_BACK_URL + "tests", data, {
    headers: { "content-type": "multipart/form-data" },
  });
};

export default {
  sendTestImage,
};
