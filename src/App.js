import React, { Component } from "react";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Nav from "./pages/Nav";
import data from "./pages/userdetails";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Nav />
          <Home />
          <Users details={data} />
      </div>
    );
  }
}

export default App;
