import React, { useState } from "react";
import Article from "./Article";
import Test from "./test_article";

const Algorithms = () => {
  const [articles, setArticles] = useState(Test.articles);

  return (
    <>
      <ul>
        {articles.length > 0 &&
          articles.map((article) => (
            <li>
              {article.title} : {article.content}
            </li>
          ))}
      </ul>
      <Article />
    </>
  );
};

export default Algorithms;
