import React, { useEffect, useState } from "react";
import AdminArticleForm from "./AdminArticleForm";
import { useParams } from "react-router-dom";
import ArticleService from "../../../../services/ArticleService";
import { Article } from "../../../../common/types/Article";

const AdminArticle = () => {
  const { id }: any = useParams();

  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    if (id != -1) {
      ArticleService.getArticleById(id)
        .then((resp) => setArticle(resp.data))
        .catch(console.log);
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
