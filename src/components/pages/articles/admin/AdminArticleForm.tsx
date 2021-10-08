import React, { useEffect, useState } from "react";
import { Button, Dropdown, Input, Menu } from "antd";
import { Editor } from "react-draft-wysiwyg";
import { ContentState, convertToRaw, EditorState } from "draft-js";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import draftToHtml from "draftjs-to-html";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import htmlToDraft from "html-to-draftjs";
import ArticleService from "../../../../services/ArticleService";
import { Article } from "../../../../common/types/Article";
import AdminArticleLabel from "./AdminArticleLabel";
import { Label } from "../../../../common/types/Label";
import ArticleLabelService from "../../../../services/ArticleLabelService";

const AdminArticleForm = ({ initArticle }: any) => {
  const [article, setArticle] = useState<Article>(initArticle);

  const [availableLabels, setAvailableLabels] = useState<Label[]>([]);

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  useEffect(() => {
    if (initArticle) {
      initEditForm();
    }
    ArticleLabelService.getAllLabels()
      .then((resp) => setAvailableLabels(resp.data))
      .catch(console.log);
  }, []);

  const initEditForm = () => {
    const contentBlock = htmlToDraft(article.content);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  };

  const fixUploadCenterImage = () => {
    let fixedContent = article.content;
    fixedContent = fixedContent.replaceAll(
      "text-align:none",
      "text-align:center"
    );
    setArticle({ ...article, content: fixedContent });
  };

  const onSubmit = () => {
    fixUploadCenterImage();
    if (initArticle.id != -1) {
      updateArticle();
    } else {
      createArticle();
    }
  };

  const updateArticle = (): void => {
    if (article) {
      ArticleService.updateArticleById(
        article.id,
        article.title,
        article.description,
        article.content,
        article.labels
      );
    }
  };

  const createArticle = (): void => {
    if (article) {
      ArticleService.createNewArticle(
        article.title,
        article.description,
        article.content,
        article.labels
      );
    }
  };

  const isLabelIsInArticleLabels = (labelId: number) => {
    return article.labels?.some((articleLabel) => articleLabel.id == labelId);
  };

  const menu = (
    <Menu>
      {availableLabels &&
        availableLabels
          .filter((label) => !isLabelIsInArticleLabels(label.id))
          .map((label) => (
            <Menu.Item
              onClick={() => {
                const newLabels = article.labels;
                newLabels?.push(label);
                setArticle({ ...article, labels: newLabels });
              }}
            >
              {label.name}
            </Menu.Item>
          ))}
    </Menu>
  );

  const removeLabel = (labelId: number) => {
    const newLabels = article.labels?.filter((label) => label.id !== labelId);
    setArticle({ ...article, labels: newLabels });
  };

  return (
    <>
      <div>
        <Button onClick={() => onSubmit()}>Submit</Button>
        <Input
          value={article.title}
          onChange={(e) => setArticle({ ...article, title: e.target.value })}
        />
        <Input
          value={article.description}
          onChange={(e) =>
            setArticle({ ...article, description: e.target.value })
          }
        />
        <AdminArticleLabel labels={article.labels} removeLabel={removeLabel} />
        <Dropdown overlay={menu}>
          <a>Labels</a>
        </Dropdown>
        <Editor
          editorState={editorState}
          editorClassName="editor-text"
          onEditorStateChange={(state: any) => {
            setEditorState(state);
            const newContent = draftToHtml(
              convertToRaw(editorState.getCurrentContent())
            );
            setArticle({ ...article, content: newContent });
          }}
        />
      </div>
      )
    </>
  );
};
export default AdminArticleForm;
