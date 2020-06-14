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
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;