import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const {
      counters,
      onDecrement,
      onIncrement,
    } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
