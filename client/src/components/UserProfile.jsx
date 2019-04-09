import React from "react";
import { withRouter } from "react-router-dom";


const UserProfile = props => {
  return (
    <div className="user-container">
      <div className='title-container'>
        <h2>{props.currentUser.username}</h2>
        <p>Email: {props.currentUser.email}</p>
      </div>
      <div className="eventsList-container">
        <nav className='sidebar-nav'>
              <button
                className="edit-button"
                id='edit-user'
                onClick={() =>
                  props.history.push(
                    `/user/edit`
                    )
                  }>Edit User
              </button>
        </nav>
    </div>
  </div>
  );
}
export default withRouter(UserProfile);
