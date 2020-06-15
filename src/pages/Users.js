import React from "react";
import moment from "moment";

function Users(props) {
  let users = props.details;
  console.log(users);
  let listOfUsers = users.map((user) => (
    <div className="card m-2" key={user._id.toString()}>
      <div className="card-header d-flex justify-content-between">
        <p>{user.company}</p> <p>{user.balance}</p>
      </div>
      <div className="card-body">
        <div className="">
          <p>Name: {user.name}</p> <p>Age: {user.age}</p>
          <p>Contact: {user.phone}</p>
          <p>Age: {user.address}</p>
          <p>Eye Color: {user.eyeColor}</p>
          <p>Em@il: {user.email}</p>
          <p>Sex: {user.gender}</p>
          <p>Registerd: {moment().format("LL")}</p>
          <p>Company Size: {user.friends.length}</p>
          <p>
            About:
            <br /> {user.about}
          </p>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            id={user._id}
            className="custom-control-input"
          />
          <label className="custom-control-label">
            Check this custom checkbox
          </label>
        </div>
      </div>
    </div>
  ));
  return <div>{listOfUsers}</div>;
}

export default Users;
