import React from "react";
import { Button } from "./Button";

export const ButtonBig = (props) => {
  return (
    <Button style={{ padding: `${props.value}` }}> {props.children}</Button>
  );
};
