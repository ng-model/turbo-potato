import React, { Component } from "react";

class Nav extends Component {
  render() {
    const date = new Date();
    const x = date.getHours();
    let wishMsg;
    switch (x) {
      case x < 12:
        wishMsg = "morning";
        break;
      case x >= 12 && x < 17:
        wishMsg = "afternoon";
        break;
      default:
        wishMsg = "night";
        break;
    }
    return (
      <div>
        <nav className="navbar justify-content-start">
          <button className="btn btn-link nav-link active">
            Active
          </button>
          <button className="btn btn-link nav-link">
            Link
          </button>
          <button className="btn btn-link nav-link">
            Link
          </button>
          <button className="btn btn-link nav-link disabled">
            Good {wishMsg} user
          </button>
        </nav>
      </div>
    );
  }
}

export default Nav;
