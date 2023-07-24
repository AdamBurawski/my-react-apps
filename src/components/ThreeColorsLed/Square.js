import React, { useState } from "react";
import styled from "styled-components";

const SquareBox = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid black;
`;

export const Square = (props) => {
  const [changeColor, setChangeColor] = useState("white");

  // const changeGreen = () => {
  //   setChangeColor("green");
  // };
  // const changeRed = () => {
  //   setChangeColor("red");
  // };
  // const changeBlue = () => {
  //   setChangeColor("blue");
  // };

  return (
    <>
      <SquareBox
        style={{
          backgroundColor: `${changeColor}`,
        }}
      ></SquareBox>
      <button onClick={() => setChangeColor("green")}>Green</button>
      <button onClick={() => setChangeColor("red")}>Red</button>
      <button onClick={() => setChangeColor("blue")}>Blue</button>
    </>
  );
};
