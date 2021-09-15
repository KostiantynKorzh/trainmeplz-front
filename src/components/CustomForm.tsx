import React, { useState } from "react";
import { Button, Form, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TestService from "../services/TestService";

const CustomForm = (): JSX.Element => {
  const fields = {
    label: "label",
    image: "image",
  };

  type CustomFormData = {
    label: string;
    image: any;
  };

  const [image, setImage] = useState("");

  const sendData = (values: CustomFormData): void => {
    console.log(values);
    const label: string = values.label;
    console.log(image);

    const formData = new FormData();
    formData.append("file", image);

    console.log("formData", formData.get("file"));

    TestService.sendDataToServer(label, image)
      .then((resp) => console.log(resp.data))
      .catch(console.log);
  };

  const onChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage(img);
    }
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        // initialValues={{ remember: true }}
        onFinish={sendData}
        autoComplete="off"
      >
        <Form.Item
          label={fields.label}
          name={fields.label}
          rules={[{ required: true, message: "Please input label" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={fields.image} name={fields.image}>
          {/*<Upload onChange={handleChange}>*/}
          {/*  <Button icon={<UploadOutlined />}>Click to Upload</Button>*/}
          {/*</Upload>*/}
          <input type="file" name="image" onChange={onChange} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CustomForm;
