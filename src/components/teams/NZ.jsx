import React, { Component } from "react";

class NZ extends Component {
  state = {
    names: [
      "Laurence",
      "Leslie",
      "Jon",
      "Vinh",
      "Lines",
      "Hayley",
      "Hamish",
      "Caitlin",
      "Melanie",
      "Seb",
      "Nicole"
    ]
  };
  render() {
    return (
      <div>
        <hr />
        <h4 className="subtitle">Team NZ</h4>
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

export default NZ;
