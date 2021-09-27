import axios, { AxiosResponse } from "axios";

import { REACT_APP_BACK_URL } from "../common/Constants";
import { Label } from "../common/types/Label";

const ARTICLE_LABEL_URL = REACT_APP_BACK_URL + "articles/labels";

const getAllLabels = (): Promise<AxiosResponse<Label[]>> => {
  return axios.get(ARTICLE_LABEL_URL);
};

export default { getAllLabels };
