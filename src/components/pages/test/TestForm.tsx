import React, { useState } from "react";
import { Button, Form, Image } from "antd";
import TestService from "../../../services/TestService";
import Prediction from "./Prediction";
import "../../../styles.css";
import ImageUploader from "../../common/ImageUploader";

const TestForm = () => {
  const [image, setImage] = useState();
  const [prediction, setPrediction] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    TestService.sendTestImage(image)
      .then((resp) => setPrediction(resp.data))
      .catch(console.log);
    setPrediction("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1000);
  };

  const onChangeImage = (image: any) => {
    setImage(image);
  };

  return (
    <>
      <div className="center-div">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={() => onSubmit()}
          autoComplete="off"
          style={{ marginTop: "100px" }}
        >
          <Form.Item label="image" name="image">
            <ImageUploader submitted={true} onChangeParent={onChangeImage} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
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
