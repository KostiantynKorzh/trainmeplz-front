import React, { useEffect, useState } from "react";
import Test from "./test_article";
import ArticlePreview from "./ArticlePreview";
import { Link } from "react-router-dom";
import ArticleService from "../../../services/ArticleService";
import { Article } from "../../../common/types/Article";

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    ArticleService.getAllArticles()
      .then((resp) => setArticles(resp.data))
      .catch(console.log);
  }, []);

  return (
    <>
      <ul>
        {articles.length > 0 &&
          articles.map((article) => (
            <Link to={`/articles/${article.id}`}>
              <ArticlePreview article={article} />
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Articles;
