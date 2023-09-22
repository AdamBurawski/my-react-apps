import React, { useState, useEffect } from "react";

export const Card = ({ results }) => {
  let display;

  if (results) {
    if (results) {
      display = results.map((x) => {
        let { id, image, name } = x;

        return (
          <div
            key={id}
            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
          >
            <div>
              <img src={image} alt="" />
              <div>
                <div className="fs-5 fw-bold mb-4">{name}</div>
                <div className=""></div>
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
