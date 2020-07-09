import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Contact</div>
        <div className="card-body">
          <form>
            <label>
              Name:
              <input className="form-control" type="text" name="name" />
            </label>
            <button className="btn btn-success">Click</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
