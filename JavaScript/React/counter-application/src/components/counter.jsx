import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // constructor(props) {
  //     super(props);
  //     this.handleIncrement = this.handleIncrement.bind(this);  // This binding is necessary to make `this` work in the callback
  // }
  // handleIncrement() {
  //     console.log("Incremented");
  //     console.log(this.state.count);
  // }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 30 }} className={this.spanClassDefine()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  spanClassDefine() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
