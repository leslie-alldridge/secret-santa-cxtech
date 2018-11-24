import React, { Component } from "react";

class Generate extends Component {
  state = {
    members: []
  };

  render() {
    return (
      <div>
        <button onClick={this.props.generate}>Generate</button>
      </div>
    );
  }
}

export default Generate;
