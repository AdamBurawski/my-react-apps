import React, { Component, useEffect, useState } from "react";

export const ProgressBar = (props) => {
  //   **1
  //   const { width } = props;

  // **2

  let start = 0;

  const [width, setWidth] = useState(`${start}%`);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (start >= 300) {
        clearInterval(intervalId);
      }
      setWidth((start = start + 1));
    }, 16);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ width, backgroundColor: "yellow", height: "20px" }}></div>
  );
};
