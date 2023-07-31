import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  position: relative;
  top: 20px;
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
    background-color: #e5cc63;
    border-radius: 5px;
    border: none;
  }
`;

const LoginCorrectBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -100px;
  display: flex;
  border-radius: 25px;
  width: 110px;
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
  @media (max-width: 767px) {
    position: relative;
    top: 40px;
    right: initial;
  }
`;

const Registration = styled.h1`
  text-align: center;
`;

const Tip = styled.span`
  font-size: 16px !important;
  text-align: center;
  margin-bottom: 10px;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100px;
  background-color: whitesmoke;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
    height: 100%;
    width: 50%;
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
  const [visibilityLog, setVisibilityLog] = useState("flex");
  const [visibilityOn, setVisibilityOn] = useState("false");
  const [bgColor, setBgColor] = useState("");
  const [loginTxt, setLoginTxt] = useState("");
  const [loginTxtTip, setLoginTxtTip] = useState("");
  const [loginTxtTipOn, setLoginTxtTipOn] = useState("none");
  const [isPassword, setIsPassword] = useState(false);
  const [colorFullName, setColorFullName] = useState("black");
  const [colorEmail, setColorEmail] = useState("black");
  const [colorPassword, setColorPassword] = useState("black");
  const [colorPasswordRepeat, setColorPasswordRepeat] = useState("black");
  const [correct, setCorrect] = useState("false");

  const sendForm = (e) => {
    e.preventDefault();

    if (visibilityOn === "false") {
      console.log(person);
      if (person.email === "a@b.c" && person.password === "1234") {
        console.log("green");
        setLogged("flex");
        setBgColor("green");
        setLoginTxt("Logged correctly");
        setLoginTxtTipOn("block");
        setLoginTxtTip("Congratulations! How did you know that? 🤔");
      } else {
        setLogged("flex");
        setBgColor("red");
        setLoginTxt("Logged incorrectly");
        setLoginTxtTipOn("block");
        setLoginTxtTip("Try login: a@b.c & pw: 1234");
      }
    } else {
      console.log(personReg);
      if (correct === true) {
        alert("Your account was registrated correctly");
      } else {
        alert("You sholud complete the data first");
      }
    }
  };

  const change = (e) => {
    setPerson((person) => ({
      ...person,
      [e.target.name]: e.target.value,
    }));

    setLogged("none");
    setLoginTxtTipOn("none");
  };

  const changeReg = (e) => {
    const { name, value } = e.target;

    setPersonReg((prevPersonReg) => ({
      ...prevPersonReg,
      [name]: value,
    }));

    if (name === "passwordRepeat") {
      if (value === personReg.password) {
        setColorPasswordRepeat("black");
        setCorrect(true);
        console.log(personReg.email.value);
      } else {
        setColorPasswordRepeat("red");
        setCorrect(false);
      }
    } else {
      if (name === "fullName") {
        if (value.length < 3) {
          setColorFullName("red");
          setCorrect(false);
        } else {
          setColorFullName("black");
          setCorrect(true);
        }
      } else if (name === "email") {
        if (name === "email" && !value.includes("@")) {
          setColorEmail("red");
          setCorrect(false);
        } else {
          // Reset the color to black when "@" is present in the value or for other fields
          setColorEmail("black");
          setCorrect(true);
        }
      } else if (name === "password") {
        if (value.length < 8) {
          setColorPassword("red");
          setCorrect(false);
        } else {
          setColorPassword("black");
          setCorrect(true);
        }
      }
    }

    if (
      personReg.email === "" ||
      personReg.password === "" ||
      personReg.passwordRepeat === ""
    ) {
      setCorrect(false);
    }

    setLogged("none");
  };

  const showRegistration = (e) => {
    e.preventDefault();

    if (visibilityOn === "false") {
      setVisibilityReg("flex");
      setVisibilityLog("none");
      setLogged("none");
      setVisibilityOn("true");
      setLoginTxtTipOn("block");
      setLoginTxtTip("Fulfill the fields. Only black color is correct");
    }
  };
  const showLogin = (e) => {
    e.preventDefault();
    if (visibilityOn === "true") {
      setVisibilityReg("none");
      setVisibilityLog("flex");
      //   setLogged("none");
      setVisibilityOn("false");
      setLoginTxtTip("Try to login");
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
          login
        </a>
        <a href="#" onClick={showRegistration}>
          registration
        </a>
      </LoginWrapper>
      <Registration style={{ display: `${visibilityReg}` }}>
        Registration
      </Registration>
      <FormWrapper>
        <LoginCorrectBox
          style={{ display: `${logged}`, backgroundColor: `${bgColor}` }}
        >
          <span>{loginTxt}</span>
        </LoginCorrectBox>
        <Tip style={{ display: `${loginTxtTipOn}` }}>{loginTxtTip}</Tip>
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
                placeholder="full name (min 3 ch.)"
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
                placeholder="e-mail (must contain @)"
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
                placeholder="password (min 8 ch.)"
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
