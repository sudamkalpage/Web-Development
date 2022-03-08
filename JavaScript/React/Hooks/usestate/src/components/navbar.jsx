import React from "react";

const Navbar = ({ countersNo }) => {
  console.log("Navbar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {countersNo}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
