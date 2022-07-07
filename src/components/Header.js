import logo from "../logo.svg";
import React, { Component } from "react";

export class Header extends Component {
  // variables accessible via "this"
  num1 = this.props.num1;
  num2 = this.props.num2;

  render() {
    // variables directly accessible via variable name.

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{this.props.title}</h1>
        <div>Num 1: {this.num1}</div>
        <div>Num 2: {this.num2}</div>
        <div>Sum of nums: {this.props.add(this.num1, this.num2)}</div>
      </header>
    );
  }
}
