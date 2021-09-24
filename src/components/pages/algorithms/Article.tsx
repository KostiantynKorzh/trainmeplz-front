import React, { useState } from "react";
import { sample } from "./test_article";

const Article = () => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState(sample);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: articleContent }} />
    </>
  );
};

export default Article;
