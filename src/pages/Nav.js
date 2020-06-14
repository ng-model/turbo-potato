import React, { Component } from "react";

class Nav extends Component {
    render() {
        const url = 'something';
    return (
      <div>
        <nav className=" nav navbar bg-light">
          <a className="nav-link active" href={url}>
            Active
          </a>
          <a className="nav-link" href={url}>
            Link
          </a>
          <a className="nav-link" href={url}>
            Link
          </a>
          <a
            className="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </nav>
      </div>
    );
  }
}

export default Nav;
