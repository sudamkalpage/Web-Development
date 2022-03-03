import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
    tags: ["tag 1", "tag 2", "tag 3"],
  };

  renderTags() {
    return this.state.tags.length === 0 ? (
      <p>There are no tags to display</p>
    ) : (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  onDelete = (counterId) => {
    let counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
    console.log("Successfully Deleted the counter with ID: ", counterId);
  };

  onIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // To avoid updating state directly
    counters[index].value += 1;
    this.setState({ counters });
  };

  handleReset = () => {
    let counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
    console.log("Successfully reset all the values");
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.onDelete}
            counter={counter}
            onIncrement={this.onIncrement}
          />
        ))}
        {this.renderTags()}
        {this.state.tags.length === 0 && <p>Please add Tags to display</p>}
      </div>
    );
  }
}

export default Counters;
