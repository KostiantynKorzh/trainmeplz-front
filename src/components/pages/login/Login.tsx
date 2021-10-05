import React from "react";
import { Button, Form, Input } from "antd";
import AuthService from "../../../services/AuthService";

const Login = (props: any) => {
  const onFinish = (values: any): void => {
    AuthService.login(values.username, values.password)
      .then((resp) => {
        localStorage.setItem("token", resp.data);
        props.history.push("/admin");
      })
      .catch(console.log);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
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

export default Login;
