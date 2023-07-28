import React, { useState } from "react";
import "./App.css";

// import { Participants } from "./Participants";
import { NumberList } from "./components/NumberList/NumberList_ex";
// import { membersData } from "./dataMembers";
// import { Clock } from "./components/Clock/Clock";
import { AnimatedProgressbar } from "./components/Progressbar/AnimatedProgressbar";
// import { InputPassword } from "./components/PassTextInput/InputPassword";
import { Square } from "./components/ThreeColorsLed/Square";
import { ListView } from "./components/UserList/ListView";
// import { DataBase } from "./data/people";
import { ControlledInput } from "./components/ContreolledInput/ControlledInput";
import { ColorBox } from "./components/ThreeColorsLed/ColorBox";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Dialog } from "./components/common/Dialog/Dialog";
import { ConfirmDialog } from "./components/common/Dialog/ConfirmDialog";
import { Button } from "./components/Button/Button";
import { ButtonBig } from "./components/Button/ButtonBig";
import { AgeGuesser } from "./components/AgeGuesser/AgeGuesser";
import { BitcoinPriser } from "./components/BitcoinPriser/BitcoinPriser";
import { FakeUsersList } from "./components/FakeUsersList/FakeUsersList";
import { HiddenList } from "./components/HiddenList/HiddenList.js";

//   **1
// const query = prompt("podaj szerokość: ");

// const App = (props) => (
//   <>
//     {<ListView />}
//     {/* 1 */}
//     {/* <Progressbar width={`${query}%`} /> */}
//     {/* 2 */}
//     {/* <Progressbar /> */}
//     {/* <NumberList /> */}
//     {/* <InputPassword />
//     <Square />
//     <Square />
//     <Square /> */}

//     {/* <Clock /> */}
//   </>
//   // const [show, setShow] = useState(true);

//   // setTimeout(() => {
//   //   setShow(false);
//   // }, 50000);

//   // return show ? <Clock /> : null;
// );

// export default App;

const App = (props) => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [age, setAge] = useState("");

  const p1 = [
    {
      p1Txt: <Square />,
    },
  ];
  const p2 = [
    {
      p1Txt: <ColorBox />,
    },
  ];
  const p3 = [
    {
      p1Txt: <AnimatedProgressbar />,
    },
  ];

  const p4 = [
    {
      p1Txt: <ControlledInput />,
    },
  ];

  const p5 = [
    {
      p1Txt: <AgeGuesser />,
    },
  ];
  const p6 = [
    {
      p1Txt: <LoginForm />,
    },
  ];
  const p7 = [
    {
      p1Txt: <FakeUsersList />,
    },
  ];
  const p8 = [
    {
      p1Txt: <BitcoinPriser />,
    },
  ];

  return (
    <section className="projects-list">
      <div className="waves"></div>
      <div className="projects-list-container">
        <div className="projects txt-container">
          <h1>React.js Components</h1>
          <h2 style={{ fontStyle: "italic" }}>
            "You can find there a collection of React components designed to
            enhance the user interface of web applications. These components are
            thoughtfully crafted to be versatile, efficient, and easily
            integrated into various projects, saving developers time and effort
            during the development process." (A.I.)
          </h2>
        </div>
        <HiddenList
          index="0"
          header="Changing color square"
          project={p1[0].p1Txt}
        />
        <HiddenList
          index="0"
          header="Changing color square 2"
          project={p2[0].p1Txt}
        />
        <HiddenList
          onCLick=""
          index="0"
          header="Progressbar"
          project={p3[0].p1Txt}
        />
        <HiddenList
          index="0"
          subtitle="You sholud start write with @"
          header="Controlled input"
          project={p4[0].p1Txt}
        />
        <HiddenList
          index="0"
          header="Age guesser"
          subtitle="Write your name then I'll try guess your age 😉"
          project={p5[0].p1Txt}
        />
        <HiddenList index="0" header="Login form" project={p6[0].p1Txt} />
        <HiddenList index="0" header="Fake user list" project={p7[0].p1Txt} />
        <HiddenList index="0" header="Bitcoin Priser" project={p8[0].p1Txt} />
      </div>

      {/* <ListView list={DataBase} /> */}

      {/* <Dialog body="Witam serdecznie"></Dialog>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        consectetur ab dolorum minus? Quaerat, non maiores, ipsam illum eaque
        facilis natus nemo illo in quasi commodi voluptatem veritatis! Alias,
        sunt!
      </p>
      <Dialog>Witam na stronie głównej!</Dialog>
      <Dialog title="Testowe okno">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt,
          maxime praesentium quos quisquam in libero ipsam asperiores illo
          commodi quaerat vel facilis excepturi. Hic quae nesciunt quis suscipit
          excepturi.
        </p>
      </Dialog>
      <ConfirmDialog title="Czy na pewno?">Jesteś pewien?</ConfirmDialog>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto mollitia
        ipsa vero, impedit quaerat eaque officiis similique at corporis
        deserunt, dolorum ratione vel, sequi beatae id iure magnam pariatur
        natus?
      </p>
       */}
    </section>
  );
};

export default App;
