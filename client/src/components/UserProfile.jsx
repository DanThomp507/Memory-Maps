import React from "react";
import { withRouter } from "react-router-dom";


const UserProfile = props => {
  return (
    <div className="user-container">
      <div className='title-container'>
        <h1>User Profile</h1>
        <p>Email: {props.currentUser.email}</p>
        <p>Name: {props.currentUser.name}</p>
        <p>Bio: {props.currentUser.bio}</p>
      </div>
      <button
        className="edit-user-button"
        id='edit-user'
        onClick={() =>
          props.history.push(
            `/user/edit`
            )
          }>Edit User
      </button>
        </div>
  );
}
export default withRouter(UserProfile);
