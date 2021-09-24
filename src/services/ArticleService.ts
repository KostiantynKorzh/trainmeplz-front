import axios, { AxiosResponse } from "axios";

const ARTICLES_URL = URL + "articles/";

export type IArticle = {
  id: number;
  description: string;
  title: string;
  content: string;
};

const getAllArticles = (): Promise<AxiosResponse<IArticle[]>> => {
  return axios.get(ARTICLES_URL);
};

const getArticleById = (id: number): Promise<AxiosResponse<IArticle>> => {
  return axios.get(ARTICLES_URL + id);
};

export default {
  getAllArticles,
  getArticleById,
};
