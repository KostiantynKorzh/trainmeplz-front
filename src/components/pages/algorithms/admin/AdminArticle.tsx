import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import draftToHtml from "draftjs-to-html";
import DefaultLayout from "../../../layouts/DefaultLayout";

const AdminArticle = (props: any) => {
  const [articleTitle, setArticleTitle] = useState(props.articleTitle || "");
  const [articleContent, setArticleContent] = useState(
    props.articleContent || ""
  );

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  useEffect(() => {
    if (editorState) {
      console.log(editorState.getCurrentContent());
    }
  }, [editorState]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <>
      <Form>
        <Form.Item
        // label="Username"
        // name="username"
        // rules={[{ required: true, message: "Please input your username!" }]}
        >
          {/*<Input.TextArea defaultValue={articleContent} autoSize={true} />*/}
          <Editor
            editorState={editorState}
            editorClassName="editor-text"
            onEditorStateChange={(state: any) => setEditorState(state)}
          />
          {/*<img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />*/}
        </Form.Item>
      </Form>
    </>
  );
};

export default AdminArticle;
