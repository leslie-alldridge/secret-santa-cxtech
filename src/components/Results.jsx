import React, { Component } from "react";

class Results extends Component {
  render() {
    return (
      <div>
        <h1 className="title">The results are: </h1>
        {this.props.pairs.map(pair => {
          return <p key={pair}>{pair}</p>;
        })}
      </div>
    );
  }
}

export default Results;
