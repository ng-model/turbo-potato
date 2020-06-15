import React, { Component } from "react";
import Table from "./Table";

class Home extends Component {
  render() {
    const heading = <h1>Home</h1>;
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
      <div>
        <header className="text-center">{heading}</header>
        <Table characterData={characters} />
      </div>
    );
  }
}

export default Home;
