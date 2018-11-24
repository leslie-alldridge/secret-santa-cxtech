import React, { Component } from "react";

class US extends Component {
  state = {
    names: ["William", "Jeff", "Tim", "Chris", "Anthony"]
  };
  render() {
    return (
      <div>
        <hr />
        <h4 className="subtitle">Team US</h4>
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

export default US;
