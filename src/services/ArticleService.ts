import axios, { AxiosResponse } from "axios";

import { REACT_APP_BACK_URL } from "../utils/Constants";

const ARTICLES_URL = REACT_APP_BACK_URL + "articles/";

export type IArticle = {
  id: number;
  description: string;
  title: string;
  content: string;
  labels?: ILabel[];
};

export type ILabel = {
  id: number;
  name: string;
};

const getAllArticles = (): Promise<AxiosResponse<IArticle[]>> => {
  return axios.get(ARTICLES_URL);
};

const getArticleById = (id: number): Promise<AxiosResponse<IArticle>> => {
  return axios.get(ARTICLES_URL + id);
};

const createNewArticle = (
  title: string,
  description: string,
  content: string
): Promise<AxiosResponse<IArticle>> => {
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
): Promise<AxiosResponse<IArticle>> => {
  return axios.put(ARTICLES_URL + id, {
    title,
    description,
    content,
  });
};

const deleteArticleById = (id: number): Promise<AxiosResponse<IArticle>> => {
  return axios.delete(ARTICLES_URL + id);
};

export default {
  getAllArticles,
  getArticleById,
  createNewArticle,
  updateArticleById,
  deleteArticleById,
};
