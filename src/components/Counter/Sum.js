import { React } from "react";
import "./App.css";
import { membersData } from "../src/dataMembers";

export function Sum() {
  return (
    <>
      <h2>Razem: {membersData.length} rekordów</h2>
    </>
  );
}
