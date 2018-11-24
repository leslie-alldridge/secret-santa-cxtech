import React, { Component } from "react";

class AU extends Component {
  state = {
    names: ["Richard", "Rahul", "Rickie"]
  };
  render() {
    return (
      <div>
        <hr />
        <h4 className="subtitle">Team AU</h4>
        {this.state.names.map(name => {
          if (this.props.selectedMembers.includes(name)) {
            return (
              <button
                className="button is-primary"
                key={name}
                onClick={() => {
                  this.props.addMember(name);
                }}
              >
                {name}
              </button>
            );
          } else {
            return (
              <button
                className="button is-light"
                key={name}
                onClick={() => {
                  this.props.addMember(name);
                }}
              >
                {name}
              </button>
            );
          }
        })}
      </div>
    );
  }
}

export default AU;
