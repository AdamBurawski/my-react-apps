import React, { useEffect, useState } from "react";
import { ListView } from "../UserList/ListView";

export const FakeUsersList = (props) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setError(null);
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        setUsers(data.results); // Update the state with the fetched users list
      } catch (e) {
        setError("Błąd wczytywania");
      }
    })();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (users.length === 0) {
    // Check if the users list is empty
    return <p>Wczytywanie...</p>;
  }

  return (
    <>
      <ListView list={users} /> {/* Pass the fetched users list to ListView */}
    </>
  );
};
