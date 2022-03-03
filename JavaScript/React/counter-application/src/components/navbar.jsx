import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondary m-2">
            {this.props.countersNo}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
