import React, { useEffect, useState, useRef } from "react";
import { Progressbar } from "./Progressbar";

export const AnimatedProgressbar = (props) => {
  const [percentage, setPercentage] = useState(0);
  const [progressbarOn, setProgressbarOn] = useState(false);
  const [startOn, setStartOn] = useState("Start");
  const intervalId = useRef(null);

  const start = () => {
    setProgressbarOn(true);

    if (progressbarOn) {
      setStartOn("Reset");
      setProgressbarOn(false);
      intervalId.current = setInterval(() => {
        setPercentage((percentage) => {
          if (percentage >= 100) {
            clearInterval(intervalId);
            return percentage;
          }
          return percentage + 1;
        });
      }, 32);

      return () => clearInterval(intervalId.current);
    } else {
      setStartOn("Start");
      clearInterval(intervalId.current);
      setPercentage(0);
    }
  };

  useEffect(() => {
    start();
  }, []);

  return (
    <>
      <Progressbar percentage={percentage} />
      <button onClick={() => start()}>{startOn}</button>
    </>
  );
};
