import React, { useEffect, useState } from "react";
import { ListElement } from "./ListElement";

export const ListView = (props) => {
  const [users, setUsers] = useState(props.list);

  const removeItem = (username) => {
    setUsers((users) => users.filter((one) => one.username !== username));
  };

  const list = [...users]
    .sort((a, b) => a.username.localeCompare(b.username))
    .map((userObj) => (
      <ListElement
        user={userObj}
        key={userObj.email}
        onRemoveItem={removeItem}
      />
    ));

  return <ul>{list}</ul>;
};
