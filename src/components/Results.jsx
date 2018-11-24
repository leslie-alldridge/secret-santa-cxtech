import React, { Component } from "react";

class Results extends Component {
  render() {
    return (
      <div>
        <h1 className="title">The results are: </h1>
        {this.props.pairs.map(pair => {
          return pair.map(people => {
            if (people[people.length - 1].length > 1) {
              return (
                <p>
                  {people[0]} is matched with {people[1] || "....nobody."}
                </p>
              );
            }
          });
        })}
      </div>
    );
  }
}

export default Results;
