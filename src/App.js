import React, { Component } from "react";
import Table from "./pages/Table";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    const heading = <h1>Hello, React!</h1>;
    const characters = [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ];
    return (
      <div className="container">
        <header className="h1 text-center">{heading}</header>
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
