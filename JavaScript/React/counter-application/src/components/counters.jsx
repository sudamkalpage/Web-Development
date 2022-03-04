import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
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

  render() {
    console.log("Counters - Rendered");

    const { onReset, onIncrement, counters, onDelete } = this.props;

    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
          />
        ))}
        {this.renderTags()}
        {this.state.tags.length === 0 && <p>Please add Tags to display</p>}
      </div>
    );
  }
}

export default Counters;
