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

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.onDelete}
            counter={counter}
          />
        ))}
        {this.renderTags()}
        {this.state.tags.length === 0 && <p>Please add Tags to display</p>}
      </div>
    );
  }
}

export default Counters;
