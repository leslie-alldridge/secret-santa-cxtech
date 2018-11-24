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
      console.log(this.props.pairs);

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
          pairArr.push(`${pair[i][1]} is matched with ${pair[i - 1][0]}`);
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
        {this.state.pairs.map(pair => {
          return <p>{pair}</p>;
        })}
      </div>
    );
  }
}

export default Results;
