import React from "react";
import { Tag } from "antd";
import { Label } from "../../../common/types/Label";

const ArticleLabel = ({ labels, isPreview = true }: any) => {
  const showLabels = () => {
    if (labels) {
      let customLabels = labels;
      if (isPreview) {
        if (labels && labels.length > 3) {
          customLabels = labels.slice(0, 4);
        }
      }
      return (
        <div>
          {customLabels.map((label: Label) => (
            <Tag color="lime">{label.name}</Tag>
          ))}
          {isPreview && <span>...</span>}
        </div>
      );
    }
  };

  return <>{showLabels()}</>;
};
export default ArticleLabel;
