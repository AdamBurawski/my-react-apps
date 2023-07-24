import React, { useState } from "react";
import "./App.css";

// import { Participants } from "./Participants";
import { NumberList } from "./components/NumberList/NumberList_ex";
// import { membersData } from "./dataMembers";
import { Clock } from "./components/Clock/Clock";
import { ProgressBar } from "./components/Progressbar/ProgressBar";
import { InputPassword } from "./components/PassTextInput/InputPassword";
import { Square } from "./components/ThreeColorsLed/Square";
import { ListView } from "./components/UserList/ListView";
import { DataBase } from "./data/people";
import { ControlledInput } from "./components/CrazyInput/ControlledInput";
import { ColorBox } from "./components/ThreeColorsLed/ColorBox";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Dialog } from "./components/common/Dialog/Dialog";
import { ConfirmDialog } from "./components/common/Dialog/ConfirmDialog";
import { Button } from "./components/Button/Button";
import { ButtonBig } from "./components/Button/ButtonBig";
import { AgeGuesser } from "./components/AgeGuesser/AgeGuesser";
import { BitcoinPriser } from "./components/BitcoinPriser/BitcoinPriser";
import { FakeUsersList } from "./components/FakeUsersList/FakeUsersList";

//   **1
// const query = prompt("podaj szerokość: ");

// const App = (props) => (
//   <>
//     {<ListView />}
//     {/* 1 */}
//     {/* <ProgressBar width={`${query}%`} /> */}
//     {/* 2 */}
//     {/* <ProgressBar /> */}
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

  return (
    <>
      {/* <Square /> */}
      {/* <ColorBox /> */}
      {/* <ControlledInput /> */}
      {/* <ListView list={DataBase} />; */}
      {/* <LoginForm /> */}
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
      <Button value="15px">Kliknij</Button>
      <ButtonBig value="15px">Kliknij</ButtonBig> */}

      {/* <AgeGuesser /> */}
      {/* <BitcoinPriser /> */}
      <FakeUsersList />
    </>
  );
};

export default App;
