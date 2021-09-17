import React, { useState } from "react";
import { Button, Form } from "antd";
import TestService from "../services/TestService";
import Prediction from "./Prediction";

const TestForm = () => {
  const [image, setImage] = useState("");
  const [prediction, setPrediction] = useState("");

  const onChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage(img);
    }
  };

  const onSubmit = () => {
    TestService.sendTestImage(image)
      .then((resp) => setPrediction(resp.data))
      .catch(console.log);
    setPrediction("");
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={() => onSubmit()}
        autoComplete="off"
        style={{ marginTop: "100px" }}
      >
        <Form.Item label="test_image" name="test_image">
          <input type="file" name="image" onChange={onChange} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div
        style={{
          width: "100%",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          // textAlign: "center",
          marginTop: "70px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "25%",
          }}
        >
          {prediction && <Prediction label={prediction} />}
        </div>
      </div>
    </>
  );
};
export default TestForm;
