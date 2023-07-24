import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  position: relative;
  top: 200px;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: right;
  width: 300px;

  form {
    border: 1px solid lightgray;
    padding: 20px 40px;
  }
  input {
    background-color: yellow;
    border-radius: 5px;
    border: none;
  }
`;

const LoginCorrectBox = styled.div`
  position: absolute;
  top: -110px;
  display: flex;
  border-radius: 25px;
  width: 100px;
  height: 100px;
  background-color: green;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Registration = styled.h1`
  text-align: center;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 400px;
  height: 100px;
  background-color: whitesmoke;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: 20px;
  }
  a:hover {
    background-color: gray;
    cursor: pointer;
    color: white;
  }
`;
export const LoginForm = (props) => {
  const [person, setPerson] = useState({
    email: "",
    password: "",
  });

  const [personReg, setPersonReg] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const [logged, setLogged] = useState("none");

  const [visibilityReg, setVisibilityReg] = useState("none");

  const [visibilityLog, setVisibilityLog] = useState("block");

  const [visibilityOn, setVisibilityOn] = useState("false");

  const [bgColor, setBgColor] = useState("");

  const [loginTxt, setLoginTxt] = useState("");

  const [isPassword, setIsPassword] = useState(false);

  const [colorFullName, setColorFullName] = useState("black");
  const [colorEmail, setColorEmail] = useState("black");
  const [colorPassword, setColorPassword] = useState("black");
  const [colorPasswordRepeat, setColorPasswordRepeat] = useState("black");

  const sendForm = (e) => {
    e.preventDefault();

    if (visibilityOn === "false") {
      console.log(person);
      if (person.email === "a@b.c" && person.password === "1234") {
        console.log("green");
        setLogged("block");
        setBgColor("green");
        setLoginTxt("Logged correctly");
      } else {
        setLogged("block");
        setBgColor("red");
        setLoginTxt("Logged incorrectly");
        console.log("red");
      }
    } else {
      console.log(personReg);
    }
  };

  const change = (e) => {
    setPerson((person) => ({
      ...person,
      [e.target.name]: e.target.value,
    }));

    setLogged("none");
  };

  const changeReg = (e) => {
    setPersonReg((personReg) => ({
      ...personReg,
      [e.target.name]: e.target.value,
    }));

    if (personReg.fullName.length < 2) {
      setColorFullName("red");
    } else {
      setColorFullName("black");
    }

    if (personReg.password.length < 7) {
      setColorPassword("red");
    } else {
      setColorPassword("black");
    }
    console.log(personReg.password, personReg.passwordRepeat);
    if (
      personReg.passwordRepeat === personReg.password &&
      personReg.passwordRepeat.length - 1 === personReg.password.length - 1
    ) {
      setColorPasswordRepeat("black");
    } else {
      setColorPasswordRepeat("red");
    }

    setLogged("none");
  };

  const showRegistration = (e) => {
    e.preventDefault();

    if (visibilityOn === "false") {
      setVisibilityReg("block");
      setVisibilityLog("none");
      setLogged("none");
      setVisibilityOn("true");
    }
  };
  const showLogin = (e) => {
    e.preventDefault();
    if (visibilityOn === "true") {
      setVisibilityReg("none");
      setVisibilityLog("block");
      //   setLogged("none");
      setVisibilityOn("false");
    }
  };

  const showPreview = () => {
    setIsPassword(true);
  };
  const hidePreview = () => {
    setIsPassword(false);
  };

  return (
    <>
      <LoginWrapper>
        <a href="#" onClick={showLogin}>
          logowanie
        </a>
        <a href="#" onClick={showRegistration}>
          rejestracja
        </a>
      </LoginWrapper>
      <Registration style={{ display: `${visibilityReg}` }}>
        Rejestracja
      </Registration>
      <FormWrapper>
        <LoginCorrectBox
          style={{ display: `${logged}`, backgroundColor: `${bgColor}` }}
        >
          <span>{loginTxt}</span>
        </LoginCorrectBox>
        <form style={{ display: `${visibilityLog}` }} onSubmit={sendForm}>
          <p>
            <label>
              <input
                placeholder="e-mail"
                type="text"
                value={person.email}
                name="email"
                onChange={change}
              />
            </label>
          </p>
          <p>
            <label>
              <input
                placeholder="password"
                type={isPassword ? "text" : "password"}
                value={person.password}
                name="password"
                onChange={change}
              />
            </label>
          </p>

          <button
            onMouseDown={showPreview}
            onMouseUp={hidePreview}
            type="submit"
          >
            Log in
          </button>
        </form>
      </FormWrapper>
      <FormWrapper>
        <form style={{ display: `${visibilityReg}` }} onSubmit={sendForm}>
          <p>
            <label>
              <input
                placeholder="full name"
                type="text"
                value={personReg.fullName}
                name="fullName"
                onChange={changeReg}
                style={{ color: `${colorFullName}` }}
              />
            </label>
          </p>
          <p>
            <label>
              <input
                placeholder="e-mail"
                type="text"
                value={personReg.email}
                name="email"
                onChange={changeReg}
                style={{ color: `${colorEmail}` }}
              />
            </label>
          </p>
          <p>
            <label>
              <input
                placeholder="password"
                type="text"
                value={personReg.password}
                name="password"
                onChange={changeReg}
                style={{ color: `${colorPassword}` }}
              />
            </label>
          </p>
          <p>
            <label>
              <input
                placeholder="repeat your password"
                type="text"
                value={personReg.passwordRepeat}
                name="passwordRepeat"
                onChange={changeReg}
                style={{ color: `${colorPasswordRepeat}` }}
              />
            </label>
          </p>
          <button type="submit">Register</button>
        </form>
      </FormWrapper>
    </>
  );
};
