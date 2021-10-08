import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import "../../../styles.css";
import ImageUploader from "../../common/ImageUploader";
import LabelService from "../../../services/LabelService";

const { Option } = Select;

const TrainingForm = ({ onSubmit, submitted }: any): JSX.Element => {
  const [labels, setLabels] = useState([]);

  const [chosenLabel, setChosenLabel] = useState("");

  const fields = {
    label: "label",
    image: "image",
  };

  const [image, setImage] = useState("");

  useEffect(() => {
    LabelService.getAllLabels()
      .then((resp) => {
        setLabels(resp.data);
      })
      .catch(console.log);
  }, []);

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
          onFinish={() => onSubmit(chosenLabel, image)}
          autoComplete="off"
          style={{
            marginTop: "100px",
            justifyContent: "center",
          }}
        >
          <Form.Item label={fields.label} name={fields.label}>
            <Input.Group compact>
              <Select
                defaultValue={labels[0] || "choose label"}
                onChange={(value) => setChosenLabel(value)}
              >
                {labels.length > 0 &&
                  labels.map((label, i) => (
                    <Option value={label} key={i}>
                      {label}
                    </Option>
                  ))}
              </Select>
            </Input.Group>
          </Form.Item>
          <Form.Item label={fields.image} name={fields.image}>
            <ImageUploader
              submitted={submitted}
              onChangeParent={onChangeImage}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default TrainingForm;
