import React, { useEffect, useState } from "react";
import TestService from "../../../services/TestService";

const ImageStats = ({ submitted }: any): JSX.Element => {
  const [stats, setStats] = useState(null);

  // TODO remove double rendering
  useEffect(() => {
    TestService.getImageStats()
      .then((resp) => setStats(resp.data))
      .catch(console.log);
  }, [submitted]);

  useEffect(() => {
    TestService.getImageStats()
      .then((resp) => setStats(resp.data))
      .catch(console.log);
  }, []);

  return (
    <>
      <h1>Current number of images for the labels</h1>
      <ul>
        {stats &&
          Object.keys(stats).map((stat: any) => (
            <li>
              {stat}: {stats[stat]}
            </li>
          ))}
      </ul>
    </>
  );
};

export default ImageStats;
