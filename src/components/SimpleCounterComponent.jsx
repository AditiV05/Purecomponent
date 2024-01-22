import React, { Component } from "react";

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      toggle: false,
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };

  handleIncrementClick = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }
  };

  render() {
    return (
      <div>
        <h2>Simple Counter: {this.state.counter}</h2>
        <button onClick={this.handleToggleClick}>Set toggle</button>
        <button onClick={this.handleIncrementClick}>Increment</button>
      </div>
    );
  }
}

export default SimpleCounterComponent;
