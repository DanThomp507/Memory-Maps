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
                className="edit-button"
                id='edit-user'
                onClick={() =>
                  props.history.push(
                    `/user/edit`
                    )
                  }>Edit User
              </button>
            <button onClick={() => { this.props.deleteUser(this.state.currentUser.id) }}>Delete User</button>
        </div>
  );
}
export default withRouter(UserProfile);
