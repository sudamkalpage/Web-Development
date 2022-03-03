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
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            counter={counter}
            onIncrement={this.props.onIncrement}
          />
        ))}
        {this.renderTags()}
        {this.state.tags.length === 0 && <p>Please add Tags to display</p>}
      </div>
    );
  }
}

export default Counters;
