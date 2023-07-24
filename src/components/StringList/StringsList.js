import { React, useEffect } from "react";
import "../../App.css";
export const StringsList = (props) => {
  const string = props.list.join(", ");

  useEffect(() => {
    console.log("Zmienia się lista");
  }, [props.list]);

  return (
    <>
      <p>{string}</p>
    </>
  );
};
