import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  // constructor(props) {
  //     super(props);
  //     this.handleIncrement = this.handleIncrement.bind(this);  // This binding is necessary to make `this` work in the callback
  // }
  // handleIncrement() {
  //     console.log("Incremented");
  //     console.log(this.state.value   );
  // }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  spanClassDefine() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

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
}

export default Counter;
