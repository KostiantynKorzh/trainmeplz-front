import React, { useEffect, useState } from "react";
import AdminArticleForm from "./AdminArticleForm";
import { useParams } from "react-router-dom";
import ArticleService from "../../../../services/ArticleService";
import Test from "../test_article";
import { Article } from "../../../../common/types/Article";

const AdminArticle = () => {
  const { id }: any = useParams();

  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    if (id > 0) {
      // ArticleService.getArticleById(id)
      //   .then((resp) => setArticle(resp.data))
      //   .catch(console.log);
      setArticle(Test.articles[id - 1]);
    } else {
      setArticle({
        id: -1,
        title: "",
        description: "",
        content: "",
      });
    }
  }, []);

  return <>{article && <AdminArticleForm initArticle={article} />}</>;
};
export default AdminArticle;
