import React, { useState } from "react";
import { ListElement } from "./ListElement";

export const ListView = (props) => {
  const [users, setUsers] = useState(props.list);

  const changeUser = () => {
    (async () => {
      try {
        // setError(null);
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        setUsers(data.results); // Update the state with the fetched users list
      } catch (e) {
        // setError("Błąd wczytywania");
      }
    })();
  };

  const list = [...users]
    .sort((a, b) => a.username.localeCompare(b.username))
    .map((userObj) => (
      <ListElement
        user={userObj}
        key={userObj.email}
        onRemoveItem={changeUser}
      />
    ));

  return <ul>{list}</ul>;
};
