import React, { useState } from "react";
import TrainForm from "./TrainForm";
import StatsBlock from "./StatsBlock";
import TrainService from "../../../services/TrainService";

const Train = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (chosenLabel: string, image: any): void => {
    TrainService.sendDataToServer(chosenLabel, image)
      .then((resp) => console.log(resp.data))
      .catch(console.log);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1000);
  };

  return (
    <>
      <TrainForm onSubmit={onSubmit} submitted={submitted} />
      <StatsBlock submitted={submitted} />
    </>
  );
};

export default Train;
