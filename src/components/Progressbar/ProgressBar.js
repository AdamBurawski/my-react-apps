import React, { Component, useEffect, useState } from "react";

export const Progressbar = (props) => {
  return (
    <div className="Progressbar" style={{ width: `${props.percentage}%` }}>
      <p>{props.percentage}%</p>
    </div>
  );
};
