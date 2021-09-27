import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Test from "./test_article";
import ArticleService from "../../../services/ArticleService";
import { Article as IArticle } from "../../../common/types/Article";
import ArticleLabel from "./ArticleLabel";

const Article = (): JSX.Element => {
  const { id }: any = useParams();

  const [article, setArticle] = useState<IArticle>();

  useEffect(() => {
    ArticleService.getArticleById(id)
      .then((resp) => setArticle(resp.data))
      .catch(console.log);
  }, []);

  return (
    <>
      <div>
        <div className="center-div">
          <div>{article && <h1>{article.title}</h1>}</div>
        </div>
        <div>
          {article && article.labels && (
            <ArticleLabel labels={article.labels} isPreview={false} />
          )}
        </div>
      </div>
      <hr
        style={{
          minWidth: "150vw",
          transform: "translate(-20%, -50%)",
          marginBottom: "4vh",
        }}
      />
      {article && <div dangerouslySetInnerHTML={{ __html: article.content }} />}
    </>
  );
};
export default Article;
