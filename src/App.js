import React, { Component } from "react";
import Home from "./pages/Home";
import Nav from "./pages/Nav";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <main>
          <Home />
        </main>
      </div>
    );
  }
}

export default App;
