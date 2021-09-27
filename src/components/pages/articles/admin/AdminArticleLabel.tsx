import React from "react";
import { Label } from "../../../../common/types/Label";
import { Tag } from "antd";

const AdminArticleLabel = ({ labels, removeLabel }: any) => {
  return (
    <>
      {labels &&
        labels.map((label: Label) => (
          <Tag color="lime" onClick={() => removeLabel(label.id)}>
            {label.name}
          </Tag>
        ))}
    </>
  );
};

export default AdminArticleLabel;
