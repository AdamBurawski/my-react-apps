import React, { useEffect, useState } from "react";

export const AgeGuesserAnswer = (props) => {
  const [age, setAge] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setError(null);
        const res = await fetch(`https://api.agify.io/?name=${props.name}`);
        const data = await res.json();
        setAge(data.age);
      } catch (e) {
        setError("Błąd wczytywania");
      }
    })();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (age === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>Your Age: {age}</p>
      <p>Yur date of birth: {new Date().getFullYear() - age} </p>
    </>
  );
};
