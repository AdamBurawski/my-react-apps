import React from "react";
import styled from "styled-components";

const DialogBox = styled.div`
  width: 80%;
  margin: 15px auto;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  padding: 0;
  color: black;
`;

const DialogBoxTitle = styled.div`
  padding: 15px;
  background-color: #efefef;
  font-size: 80%;
  font-weight: bold;
`;

const DialogBoxTxt = styled.div`
  padding: 15px;
`;

export const Dialog = (props) => (
  <DialogBox>
    {props.title ? <DialogBoxTitle>{props.title}</DialogBoxTitle> : ""}
    <DialogBoxTxt>{props.children}</DialogBoxTxt>
  </DialogBox>
);
