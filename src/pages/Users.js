import React from "react";
import moment from "moment";

function Users(props) {
  let users = props.details;
  let listOfUsers = users.map((user) => (
    <div className="card m-2" key={user._id}>
      <div className="card-header bg-white d-flex justify-content-between">
        <p>{user.company}</p> <p>{user.balance}</p>
      </div>
      <div className="card-body">
        <div className="">
          <p>
            Name: {user.name} {user.age} years, Contact: {user.phone}, Age:{" "}
            {user.address}, Eye Color: {user.eyeColor}Em@il: {user.email}, Sex:{" "}
            {user.gender}, Registerd: {moment().format("LL")}, Company Size:{" "}
            {user.friends.length}
          </p>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            checked={user.isActive}
            // id={user._id}
            className="custom-control-input"
          />
          <label className="custom-control-label">{user.favoriteFruit}</label>
        </div>
      </div>
    </div>
  ));
  return <div>{listOfUsers}</div>;
}

export default Users;
