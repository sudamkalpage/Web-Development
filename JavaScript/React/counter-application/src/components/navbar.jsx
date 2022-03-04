import React, { Component } from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {props.countersNo}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
