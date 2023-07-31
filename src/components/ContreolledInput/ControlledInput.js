import React, { useEffect, useState } from "react";

export const ControlledInput = (props) => {
  const [firstName, setFirstName] = useState("");

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const color = firstName[0] === "@" ? "green" : "red";

  const sendForm = (e) => {
    e.preventDefault();
    alert(firstName);
  };

  const notSendingForm = (e) => {
    e.preventDefault();
    alert('Adress must contain "@"');
  };
  const sendCorrect = firstName[0] === "@" ? sendForm : notSendingForm;
  return (
    <form onSubmit={sendCorrect}>
      <textarea
        type="text"
        name="firstName"
        value={firstName}
        onChange={changeFirstName}
        style={{ backgroundColor: color }}
      />
      <p>You've entered {firstName.length} characters.</p>
      <button type="submit">Send</button>
    </form>
  );
};
