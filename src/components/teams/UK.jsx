import React, { Component } from "react";

class UK extends Component {
  state = {
    names: [
      "Rob",
      "Matt R.",
      "Matt F.",
      "Paige",
      "Anneka",
      "Sam",
      "James",
      "Archie",
      "Adeel",
      "Steve"
    ]
  };
  render() {
    return (
      <div>
        <hr />
        <h4 className="subtitle">Team UK</h4>
        {this.state.names.map(name => {
          if (this.props.selectedMembers.includes(name)) {
            return (
              <button
                class="button is-primary"
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
                class="button is-light"
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

export default UK;
