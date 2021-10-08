import React, { useState } from "react";
import TrainingForm from "./TrainingForm";
import StatsBlock from "./StatsBlock";
import TrainService from "../../../services/TrainingService";

const Training = () => {
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
      <TrainingForm onSubmit={onSubmit} submitted={submitted} />
      <StatsBlock submitted={submitted} />
    </>
  );
};

export default Training;
