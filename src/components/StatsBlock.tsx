import React from "react";
import ImageStats from "./ImageStats";

const StatsBlock = (submitted: any) => {
  return (
    <>
      <ImageStats submitted={submitted} />
    </>
  );
};

export default StatsBlock;
