import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Picture = styled.div`
  img {
    width: 60px;
    height: 60px;
    margin: 5px 20px;
    border-radius: 50%;
  }
`;

const PersonELement = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between !important;
  border: 1px solid whitesmoke;
  width: 250px;
  padding: 5px 15px;
  cursor: pointer;
  transition: 0.4s;
  border-radius: 10px;
  &:hover {
    background-color: yellow;
  }
  p {
    display: inline-block;
    margin-left: 5px;
    margin-top: 3px;
    margin-bottom: 3px;
  }
`;

const PersonData = styled.div`
  display: flex;
  flex-wrap: wrap;
  p:nth-child(1) {
    flex-basis: 100%;
  }
  p:nth-child(2) {
    color: gray;
  }
`;

export const ListElement = (props) => {
  const personLiClicked = () => {
    props.onRemoveItem(props.user.username);
  };

  return (
    <PersonELement key={String(props.user.email)} onClick={personLiClicked}>
      <Picture>
        <img
          // src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${props.user.picture}`}
          src={`${props.user.picture.medium}`}
          // src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/men/28.jpg`}
          alt={`Photo of ${props.user.picture.medium}`}
        ></img>
      </Picture>
      <PersonData>
        <p>
          {/* {props.user.first_name} {props.user.last_name} */}
          {props.user.name.first} {props.user.name.last}
        </p>

        {/* </strong> */}
        {/* <p> {props.user.username}</p> */}
      </PersonData>
    </PersonELement>
  );
};
