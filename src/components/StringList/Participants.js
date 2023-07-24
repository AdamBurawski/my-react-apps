import React, { useState } from "react";
import "./App.css";
import { RecordsCount } from "../Counter/RecordsCount";
import { StringsList } from "./StringsList";

export const Participants = (props) => {
  const names = props.list.map((person) => person.name);

  const [thingToDo, setThingToDo] = useState("pójść do lodówki");
  const [person, setPerson] = useState({
    name: "Bartek",
    email: "bartek@gmail.com",
  });

  setTimeout(() => {
    setThingToDo("zjeść pizze");

    setPerson((person) => {
      const personCopy = JSON.parse(JSON.stringify(person));
      personCopy.name = "Kuba";
      return personCopy;
    });
  }, 1000);

  return (
    <>
      {thingToDo}
      <StringsList list={names} />
      <RecordsCount count={names.length} />
      <p>{person.name}</p>
    </>
  );
};
