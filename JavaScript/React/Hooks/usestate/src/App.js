import React from "react";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar countersNo={0} />
      <main className="container">
        <button className="btn btn-primary  btn-lg m-2">+</button>
        <span
          style={{ fontSize: 25 }}
          className="badge badge-pill badge-warning m-2 badge"
        >
          2
        </span>
        <button className="btn btn-danger btn-lg m-2">-</button>
      </main>
    </React.Fragment>
  );
}

export default App;
