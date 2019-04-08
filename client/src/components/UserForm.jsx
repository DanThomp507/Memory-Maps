import React from "react";

export default props => {
  const {
    show,
    toggle,
    name,
    username,
    email,
    password,
    bio,
    onChange,
    onSubmit,
    onClick,
    submitButtonText,
    backButtonText,
    toggleLocal,
    passwordAsk,
    title,
  } = props;

  const showRegister = !toggle;
  return (
    showRegister && (
      <div className="user-form-container">
      <h1>{title}</h1>
        <form>
          <input
            id='name'
            onChange={onChange}
            type="text"
            placeholder="name"
            name="name"
            value={name}
          />
          <br/>
          <input
            id='username'
            onChange={onChange}
            type="text"
            placeholder="username"
            name="username"
            value={username}
          />
          <br/>
          <input
            id='user-email'
            onChange={onChange}
            type="text"
            placeholder="Email"
            name="email"
            value={email}
          />
          <br/>
          <input
            id='bio'
            onChange={onChange}
            type="text"
            placeholder="Bio"
            name="bio"
            value={bio}
          />
          <br/>
          {passwordAsk && (
            <>
          <input
            id='user-password'
            onChange={onChange}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
          />
          <br/>
          </>
        )}
          <br/>
          <button id='user-submit' type="submit" onClick={onSubmit}>
            {submitButtonText}
          </button>
          <button id='user-back' type="submit" onClick={onClick}>
            {backButtonText}
          </button>
        </form>
      </div>
    )
  );
};
