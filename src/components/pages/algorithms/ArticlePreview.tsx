import React, { useState } from "react";
import { Card } from "antd";

const ArticlePreview = ({ article }: any) => {
  return (
    <div>
      <Card
        title={article.title}
        bordered={false}
        bodyStyle={{ maxHeight: "110px" }}
      >
        {article.description}
      </Card>
    </div>
  );
};

export default ArticlePreview;
