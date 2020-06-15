import React, { Component } from "react";

class Nav extends Component {
  render() {
    const url = "something";
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
          <a className="nav-link active" href={url}>
            Active
          </a>
          <a className="nav-link" href={url}>
            Link
          </a>
          <a className="nav-link" href={url}>
            Link
          </a>
          <a className="nav-link disabled">
            Good {wishMsg} user
          </a>
        </nav>
      </div>
    );
  }
}

export default Nav;
