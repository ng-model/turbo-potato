import React, { Component } from "react";

class Nav extends Component {
  render() {
    const date = new Date();
    const x = date.getHours();
    let wishMsg;
     if (x < 12) {
       wishMsg = "morning";
     } else if (x >= 12 && x < 17) {
       wishMsg = "afternoon";
     } else {
       wishMsg = "night";
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
