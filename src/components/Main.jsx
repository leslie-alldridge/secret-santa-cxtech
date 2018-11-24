import React, { Component } from "react";
import UK from "./teams/UK";

class Main extends Component {
  state = {
    members: []
  };

  addMember = member => {
    this.setState({
      members: [...this.state.members, member]
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2 className="title">CX-Tech Secret Santa Generator</h2>
        <h4 className="subtitle">
          Please select team members you want to include below, then hit
          randomise!
        </h4>
        <UK addMember={this.addMember} selectedMembers={this.state.members} />
      </div>
    );
  }
}

export default Main;
