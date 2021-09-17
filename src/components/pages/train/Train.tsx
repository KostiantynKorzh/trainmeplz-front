import React, { useState } from "react";
import CustomForm from "./CustomForm";
import StatsBlock from "./StatsBlock";
import TestService from "../../../services/TestService";

const Train = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (chosenLabel: string, image: any): void => {
    TestService.sendDataToServer(chosenLabel, image)
      .then((resp) => console.log(resp.data))
      .catch(console.log);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1000);
  };

  return (
    <>
      <CustomForm onSubmit={onSubmit} />
      <StatsBlock submitted={submitted} />
    </>
  );
};

export default Train;
