import React from "react";
import { Tag } from "antd";
import { ILabel } from "../../../services/ArticleService";

const ArticleLabel = ({ labels }: any) => {
  const showLabels = () => {
    if (labels) {
      let customLabels = labels;
      let isSliced = false;
      if (labels && labels.length > 3) {
        customLabels = labels.slice(0, 4);
        isSliced = true;
      }
      return (
        <div>
          {customLabels.map((label: ILabel) => (
            <Tag color="lime">{label.name}</Tag>
          ))}
          {isSliced && <span>...</span>}
        </div>
      );
    }
  };

  return <>{showLabels()}</>;
};
export default ArticleLabel;
