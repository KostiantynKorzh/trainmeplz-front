import ParticlesBg from "particles-bg";
import React from "react";
import { Card } from "antd";

const Main = () => {
  const welcomeText = `
    Welcome to my machine learning project\n
    Let me show how you can help training model with images  
    `
    .split("\n")
    .map((str) => <p>{str}</p>);

  return (
    <>
      <div className="center">
        <Card
          style={{
            border: "solid red 1px",
            borderRadius: "30px",
            minHeight: "20vh",
            maxWidth: "60vw",
          }}
          bordered={false}
          bodyStyle={{ fontSize: "2.4em" }}
        >
          {welcomeText}
        </Card>
      </div>
      {/*<div style={{ opacity: 0.4 }}>*/}
      <ParticlesBg type="cobweb" bg={true} />
      {/*</div>*/}
    </>
  );
};

export default Main;
