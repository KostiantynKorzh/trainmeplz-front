import React, { useEffect, useState } from "react";
import StatsService from "../../../services/StatsService";

const ImageStats = ({ submitted }: any): JSX.Element => {
  const [stats, setStats] = useState(null);

  // TODO remove double rendering
  useEffect(() => {
    StatsService.getImageStats()
      .then((resp) => setStats(resp.data))
      .catch(console.log);
  }, [submitted]);

  useEffect(() => {
    StatsService.getImageStats()
      .then((resp) => setStats(resp.data))
      .catch(console.log);
  }, []);

  return (
    <>
      <h1>Current number of images for the labels</h1>
      <ul>
        {stats &&
          Object.keys(stats).map((stat: any, i) => (
            <li key={i}>
              {stat}: {stats[stat]}
            </li>
          ))}
      </ul>
    </>
  );
};

export default ImageStats;
