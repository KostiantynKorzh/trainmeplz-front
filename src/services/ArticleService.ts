import axios, { AxiosResponse } from "axios";

import { REACT_APP_BACK_URL } from "../common/Constants";
import { Article } from "../common/types/Article";
import { Label } from "../common/types/Label";
import authHeader from "./AuthHeader";

const ARTICLES_URL = REACT_APP_BACK_URL + "articles";

const getAllArticles = (): Promise<AxiosResponse<Article[]>> => {
  return axios.get(ARTICLES_URL);
};

const getArticleById = (id: number): Promise<AxiosResponse<Article>> => {
  return axios.get(ARTICLES_URL + "/" + id);
};

const createNewArticle = (
  title: string,
  description: string,
  content: string,
  labels: Label[] | undefined
): Promise<AxiosResponse<Article>> => {
  const labelsIds = labels ? labels.map((label) => label.id) : [];

  return axios.post(
    ARTICLES_URL,
    {
      title,
      description,
      content,
      labelsIds,
    },
    {
      headers: authHeader(),
    }
  );
};

const updateArticleById = (
  id: number,
  title: string,
  description: string,
  content: string,
  labels: Label[] | undefined
): Promise<AxiosResponse<Article>> => {
  const labelsIds = labels ? labels.map((label) => label.id) : [];

  return axios.put(
    ARTICLES_URL + "/" + id,
    {
      title,
      description,
      content,
      labelsIds,
    },
    {
      headers: authHeader(),
    }
  );
};

const deleteArticleById = (id: number): Promise<AxiosResponse<Article>> => {
  return axios.delete(ARTICLES_URL + "/" + id, {
    headers: authHeader(),
  });
};

export default {
  getAllArticles,
  getArticleById,
  createNewArticle,
  updateArticleById,
  deleteArticleById,
};
