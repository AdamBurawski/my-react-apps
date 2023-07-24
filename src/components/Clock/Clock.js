// import React, { Component } from "react";

// export class Clock extends Component {
//   state = {
//     dt: new Date(),
//   };

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       this.setState({
//         dt: new Date(),
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   render() {
//     return <p>{this.state.dt.toLocaleString()}</p>;
//   }
// }

import React, { useEffect, useState } from "react";

export const Clock = (porps) => {
  const [dt, setDt] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDt(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      // console.log("znikam");
    };
  }, []);

  // useEffect(() => {
  //   console.log("Czas się zmienił");
  // }, [dt]);

  return <p>{dt.toLocaleString()}</p>;
};
