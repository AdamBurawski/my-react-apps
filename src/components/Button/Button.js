import React from "react";
import styled from "styled-components";

const ButtonBox = styled.button`
  width: 200px;
  background-color: orange;
  font-weight: bold;
  letter-spacing: 2px;
  border: none;
  border-radius: 5px;
`;

export const Button = (props) => (
  <ButtonBox style={{ padding: `${props.value}` }}>{props.children}</ButtonBox>
);
