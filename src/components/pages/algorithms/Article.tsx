import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Test from "./test_article";

const Article = (): JSX.Element => {
  const { id }: any = useParams();

  const article = Test.articles[id - 1];

  const [articleTitle, setArticleTitle] = useState(article.title);
  const [articleContent, setArticleContent] = useState(article.content);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: articleContent }} />
    </>
  );
};

export default Article;
