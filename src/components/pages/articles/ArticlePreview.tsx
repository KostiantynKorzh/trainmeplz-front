import React from "react";
import { Card } from "antd";
import ArticleLabel from "./ArticleLabel";

const ArticlePreview = ({ article }: any) => {
  return (
    <div>
      <Card
        title={article.title}
        bordered={false}
        bodyStyle={{ maxHeight: "110px" }}
        extra={<ArticleLabel labels={article.labels} />}
      >
        {article.description}
      </Card>
    </div>
  );
};

export default ArticlePreview;
