import React, { Component } from "react";

class Results extends Component {
  state = {
    pairs: []
  };

  componentDidMount = () => {
    this.handlePairs();
  };

  handlePairs = () => {};

  render() {
    return (
      <div>
        <h1 className="title">The results are: </h1>
        {this.props.pairs.map(pair => {
          return <p>{pair}</p>;
        })}
      </div>
    );
  }
}

export default Results;
