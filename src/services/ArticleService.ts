import axios, { AxiosResponse } from "axios";

import { REACT_APP_BACK_URL } from "../common/Constants";
import { Article } from "../common/types/Article";

const ARTICLES_URL = REACT_APP_BACK_URL + "articles/";

const getAllArticles = (): Promise<AxiosResponse<Article[]>> => {
  return axios.get(ARTICLES_URL);
};

const getArticleById = (id: number): Promise<AxiosResponse<Article>> => {
  return axios.get(ARTICLES_URL + id);
};

const createNewArticle = (
  title: string,
  description: string,
  content: string
): Promise<AxiosResponse<Article>> => {
  return axios.post(ARTICLES_URL, {
    title,
    description,
    content,
  });
};

const updateArticleById = (
  id: number,
  title: string,
  description: string,
  content: string
): Promise<AxiosResponse<Article>> => {
  return axios.put(ARTICLES_URL + id, {
    title,
    description,
    content,
  });
};

const deleteArticleById = (id: number): Promise<AxiosResponse<Article>> => {
  return axios.delete(ARTICLES_URL + id);
};

export default {
  getAllArticles,
  getArticleById,
  createNewArticle,
  updateArticleById,
  deleteArticleById,
};
