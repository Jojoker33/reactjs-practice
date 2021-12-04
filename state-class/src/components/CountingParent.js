import React from "react";
import { Child } from "./Child";

//
export default class CountingParent extends React.Component {
  /*
    constructor(props) {
    super(props);
    this.state = {
      actionCount: 0,
    };

    //By returning the function in the render function, the this context is lost
    this.handleAction = this.handleAction.bind(this);
    this.reset = this.reset.bind(this);
  } */

  // Correct way
  state = {
    actionCount: 0,
  };

  handleAction = (action) => {
    this.setState({
      actionCount: this.state.actionCount + 1,
    });
  };

  reset = (action) => {
    this.setState({
      actionCount: 0,
    });
  };

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} reset={this.reset} />
        <p> Clicked {this.state.actionCount}</p>
      </div>
    );
  }
}
