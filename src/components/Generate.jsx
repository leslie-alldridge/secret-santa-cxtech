import React, { Component } from "react";

class Generate extends Component {
  render() {
    return (
      <div>
        <hr />
        <button
          className="button is-link"
          id="submit"
          onClick={this.props.generate}
        >
          Generate
        </button>
      </div>
    );
  }
}

export default Generate;
