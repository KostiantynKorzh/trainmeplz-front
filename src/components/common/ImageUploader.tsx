import React, { useEffect, useState } from "react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

const ImageUploader = ({ submitted, onChangeParent }: any): JSX.Element => {
  const [fileList, setFileList] = useState([]);

  // type FileList = {
  //   files: Array<File>;
  // };
  //
  // type File = {
  //   uid: string;
  //   name: string;
  //   status: string;
  //   url: string;
  // };

  useEffect(() => {
    if (submitted) {
      setFileList([]);
    }
  }, [submitted]);

  const onChange = ({ fileList: newFileList }: any) => {
    onChangeParent(newFileList[0]);
    setFileList(newFileList);
  };

  const onPreview = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        const { result }: any = reader;
        reader.onload = () => resolve(result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <>
      <ImgCrop rotate>
        <Upload
          maxCount={1}
          // action={actionUrl}
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
          beforeUpload={() => false}
        >
          {fileList.length < 1 && "+ Upload"}
        </Upload>
      </ImgCrop>
    </>
  );
};

export default ImageUploader;
