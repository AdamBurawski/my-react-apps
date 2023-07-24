import { React } from "react";
import "./App.css";
import { membersData2 } from "../src/dataMembers";

export function Members(props) {
  let { membersData = membersData2 } = props;

  return (
    <>
      <p>{membersData.map((person) => person.memberName).join(", ")}</p>
    </>
  );
}
