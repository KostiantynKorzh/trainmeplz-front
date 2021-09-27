import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
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

const AdminArticleForm = ({ initArticle }: any) => {
  const [article, setArticle] = useState<Article>(initArticle);

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  useEffect(() => {
    if (initArticle) {
      initEditForm();
    }
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

  const onSubmit = () => {
    if (initArticle.id > 0) {
      updateArticle();
    } else {
      createArticle();
    }
    console.log(article);
  };

  const updateArticle = (): void => {
    if (article) {
      ArticleService.updateArticleById(
        article.id,
        article.title,
        article.description,
        article.content
      );
    }
  };

  const createArticle = (): void => {
    if (article) {
      ArticleService.createNewArticle(
        article.title,
        article.description,
        article.content
      );
    }
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
