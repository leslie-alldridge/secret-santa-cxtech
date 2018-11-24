import React, { Component } from "react";

class Results extends Component {
  state = {
    pairs: []
  };

  componentDidMount = () => {
    this.handlePairs();
  };

  handlePairs = () => {
    let pairArr = [];
    this.props.pairs.map(pair => {
      // return pair.map(people => {
      for (let i = 0; i < pair.length; i++) {
        console.log(i);
        if (i < 1) {
          pairArr.push(
            `${pair[i][0]} is matched with ${pair[i][1] || pair[i - 1][0]}`
          );
        } else {
          pairArr.push(
            `${pair[i][0]} is matched with ${pair[i][1] || pair[i - 1][0]}`
          );
          pairArr.push(`${pair[i - 1][1]} is matched with ${pair[i][0]}`);
        }
      }
    });
    // });
    console.log(pairArr);

    this.setState({
      pairs: pairArr
    });
  };

  render() {
    return (
      <div>
        <h1 className="title">The results are: </h1>
        {this.props.pairs.map(pair => {
          return pair.map(people => {
            if (people[people.length - 1].length > 1) {
              return (
                <p>
                  {people[0]} is matched with {people[1] || pair[0][0]}
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
