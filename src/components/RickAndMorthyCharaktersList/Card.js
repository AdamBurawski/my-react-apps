import React from "react";

export const Card = ({ results }) => {
  let display;

  if (results) {
    if (results) {
      display = results.map((element) => {
        let { id, image, name } = element;

        return (
          <div key={id}>
            <div>
              <img src={image} alt="" />
              <div>
                <div>{name}</div>
              </div>
            </div>
          </div>
        );
      });
    }
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};
