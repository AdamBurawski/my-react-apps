import React, { useState } from "react";
import styled from "styled-components";

const ColorBoxSquare = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid black;
`;

export const ColorBox = (props) => {
  const [backgroundColor, setBackgroundColor] = useState("#FF0000");

  return (
    <>
      <ColorBoxSquare style={{ backgroundColor }}></ColorBoxSquare>
      <select
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      >
        <option value="#ff0000">Red</option>
        <option value="#00ff00">Green</option>
        <option value="#0000ff">Blue</option>
      </select>
      <div>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
    </>
  );
};
