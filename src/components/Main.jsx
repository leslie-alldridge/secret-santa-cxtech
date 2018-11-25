import React, { Component } from "react";
import UK from "./teams/UK";
import NZ from "./teams/NZ";
import AU from "./teams/AU";
import US from "./teams/US";
import Generate from "./Generate";
import shuffle from "./shuffle";
import Results from "./Results";

class Main extends Component {
  state = {
    members: [],
    pairs: [],
    results: false
  };

  addMember = member => {
    if (this.state.members.includes(member)) {
      for (var i = this.state.members.length - 1; i >= 0; i--) {
        if (this.state.members[i] === member) {
          this.state.members.splice(i, 1);
          this.setState({
            members: this.state.members
          });
        }
      }
    } else {
      this.setState({
        members: [...this.state.members, member]
      });
    }
  };

  generate = () => {
    this.setState({
      results: true
    });
    let shuffledArr = shuffle(this.state.members);
    let matchedArr = [];

    for (let i = 0; i < shuffledArr.length - 1; i++) {
      matchedArr.push(
        `${shuffledArr[i]} is matched with ${shuffledArr[i + 1]}`
      );
    }

    matchedArr.push(
      `${shuffledArr[shuffledArr.length - 1]} is matched with ${shuffledArr[0]}`
    );

    this.setState({
      pairs: matchedArr
    });
  };

  render() {
    return (
      <div>
        <h2 className="title">CX-Tech Secret Santa Generator</h2>
        <h4 className="subtitle">
          Please select team members you want to include below, then hit
          Generate!
        </h4>
        <UK addMember={this.addMember} selectedMembers={this.state.members} />
        <US addMember={this.addMember} selectedMembers={this.state.members} />
        <NZ addMember={this.addMember} selectedMembers={this.state.members} />
        <AU addMember={this.addMember} selectedMembers={this.state.members} />
        <Generate generate={this.generate} />
        {this.state.results && <Results pairs={this.state.pairs} />}
      </div>
    );
  }
}

export default Main;
