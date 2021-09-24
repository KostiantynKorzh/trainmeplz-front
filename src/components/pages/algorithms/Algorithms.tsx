import React, { useState } from "react";
import Test from "./test_article";
import ArticlePreview from "./ArticlePreview";
import { Link } from "react-router-dom";

const Algorithms = () => {
  const [articles, setArticles] = useState(Test.articles);

  return (
    <>
      <ul>
        {articles.length > 0 &&
          articles.map((article) => (
            <Link to={`/algorithms/${article.id}`}>
              <ArticlePreview article={article} />
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Algorithms;
