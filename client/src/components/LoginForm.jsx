import React from "react";

export default props => {
  const { toggle, show, email, password, onChange, onSubmit, onClick, register } = props;
  const showLogin = toggle;
  return (
    showLogin && (
      <div className="user-form-container">
        <form>
          <h2>Login</h2>
          <div className='email-password'>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={onChange}
              name="email"
              id="email"
              value={email}
            />
          </div>
          <div className='email-password'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={onChange}
              name="password"
              id="password"
              value={password}
            />
          </div>
          <button id='sign-in' className='login-button' type="submit" onClick={onSubmit}>
            Sign In
          </button>
          <p id='register'> Don't have an account?</p>
            <button className='login-button' type="submit" onClick={register}>
              Register Here!
            </button>
        </form>
      </div>
    )
  );
};
