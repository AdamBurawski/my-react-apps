import React, { Component, useEffect, useState } from "react";
import { StringsList } from "../StringList/StringsList";

export const NumberList = (props) => {
  const [numbers, setNumbers] = useState([1]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumbers((numbers) => [...numbers, numbers.length + 1]);

      console.log(numbers);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <StringsList list={numbers} />;
};

// export class NumberList extends Component {
//   state = {
//     numbers: [1],
//   };

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       this.setState((prev) => {
//         return {
//           numbers: [...prev.numbers, prev.numbers.length + 1],
//         };
//       });
//       console.log(this.state.numbers);
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   render() {
//     return <StringsList list={this.state.numbers} />;
//   }
// }
