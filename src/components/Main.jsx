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
    const len = shuffledArr.length;
    // if (len % 2 === 1) {
    //alert("you have an odd number of people, someone will be left out");
    shuffledArr = shuffledArr.reduce(function(result, value, index, array) {
      if (index % 2 === 0) result.push(array.slice(index, index + 2));
      return result;
    }, []);
    this.setState({
      pairs: shuffledArr
    });
    // }
    shuffledArr = shuffledArr.reduce(function(result, value, index, array) {
      if (index % 2 === 0) result.push(array.slice(index, index + 2));
      return result;
    }, []);
    this.setState({
      pairs: shuffledArr
    });
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
