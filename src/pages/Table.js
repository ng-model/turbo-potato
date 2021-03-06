import React, { Component } from "react";
import Counter from "./Counter";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData } = this.props;
    return (
      <div>
        <table className="table table-hover">
          <TableHeader />
          <TableBody characterData={characterData} />
        </table>
        <Counter />
      </div>
    );
  }
}

export default Table;
