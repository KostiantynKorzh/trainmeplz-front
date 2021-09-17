import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import TestService from "../services/TestService";

const { Option } = Select;

const CustomForm = ({ onSubmit }: any): JSX.Element => {
  const [labels, setLabels] = useState([]);

  const [chosenLabel, setChosenLabel] = useState("");

  const fields = {
    label: "label",
    image: "image",
  };

  const [image, setImage] = useState("");

  useEffect(() => {
    TestService.getAllLabels()
      .then((resp) => {
        console.log(resp);
        setLabels(resp.data);
      })
      .catch(console.log);
  }, []);

  // const sendData = (): void => {
  //   TestService.sendDataToServer(chosenLabel, image)
  //     .then((resp) => console.log(resp.data))
  //     .catch(console.log);
  // };

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
        onFinish={() => onSubmit(chosenLabel, image)}
        autoComplete="off"
        style={{ marginTop: "100px" }}
      >
        <Form.Item label={fields.label} name={fields.label}>
          <Input.Group compact>
            <Select
              defaultValue={labels[0] || "choose label"}
              onChange={(value) => setChosenLabel(value)}
            >
              {labels.length > 0 &&
                labels.map((label) => <Option value={label}>{label}</Option>)}
            </Select>
          </Input.Group>
        </Form.Item>
        <Form.Item label={fields.image} name={fields.image}>
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
