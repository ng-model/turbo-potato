import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.countPlus = this.countPlus.bind(this);
    this.countMinus = this.countMinus.bind(this);
  }
  countPlus() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  countMinus() {
    if (this.state.count === 0) {
      alert("Can't go below 0");
    } else {
      this.setState((prevState) => {
        return {
          count: prevState.count - 1,
        };
      });
    }
  }
  render() {
    return (
      <div className="card-body">
        <div className="d-flex justify-content-around m-5">
          <button
            className="btn btn-success rounded-circle"
            onClick={this.countPlus}
          >
            +
          </button>
          <h4 className="">{this.state.count}</h4>
          <button
            className="btn btn-danger rounded-circle"
            onClick={this.countMinus}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
