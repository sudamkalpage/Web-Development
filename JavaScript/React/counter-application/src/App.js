import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log("App - Constructor");
    // this.state = this.props.something;
  }

  componentDidMount() {
    console.log("App - Mounted");
    // AJAX Call (Asynchronous JavaScript and XML)
    // this.setState({movies})
  }

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  onDelete = (counterId) => {
    let counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
    console.log("App - Constructor");
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
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <Navbar
          countersNo={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onDelete={this.onDelete}
            onIncrement={this.onIncrement}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
