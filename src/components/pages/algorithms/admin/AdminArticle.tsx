import React, { useEffect, useState } from "react";
import AdminArticleForm from "./AdminArticleForm";
import { useParams } from "react-router-dom";
import ArticleService, { IArticle } from "../../../../services/ArticleService";
import Test from "../test_article";

const AdminArticle = () => {
  const { id }: any = useParams();

  const [article, setArticle] = useState<IArticle>();

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
