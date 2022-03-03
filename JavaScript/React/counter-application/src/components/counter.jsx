import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //     super(props);
  //     this.handleIncrement = this.handleIncrement.bind(this);  // This binding is necessary to make `this` work in the callback
  // }
  // handleIncrement() {
  //     console.log("Incremented");
  //     console.log(this.state.value   );
  // }

  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  spanClassDefine() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  render() {
    return (
      <div>
        <span style={{ fontSize: 30 }} className={this.spanClassDefine()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
