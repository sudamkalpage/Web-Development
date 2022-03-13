import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState({ no: 0, color: "Yellow" });

  function Increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function Decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function ChangeState() {
    setState((prevState) => {
      return { ...prevState, no: prevState.no - 1 };
    });
  }

  return (
    <React.Fragment>
      <Navbar countersNo={0} />
      <main className="container">
        <button className="btn btn-primary  btn-lg m-2" onClick={Increment}>
          +
        </button>
        <span
          style={{ fontSize: 25 }}
          className="badge badge-pill badge-warning m-2 badge"
        >
          {count}
        </span>
        <button className="btn btn-danger btn-lg m-2" onClick={Decrement}>
          -
        </button>
        <br></br>

        <span
          style={{ fontSize: 25 }}
          className="badge badge-pill badge-warning m-2 badge"
        >
          {state.color}
        </span>
        <span
          style={{ fontSize: 25 }}
          className="badge badge-pill badge-warning m-2 badge"
        >
          {state.no}
        </span>
        <button className="btn btn-danger btn-lg m-2" onClick={ChangeState}>
          -
        </button>
      </main>
    </React.Fragment>
  );
}

export default App;
