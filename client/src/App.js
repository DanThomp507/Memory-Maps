import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router";
import './App.css';
import decode from 'jwt-decode';
import Home from './components/Home.jsx'
import Map from './components/Map.jsx';
import LoginForm from './components/LoginForm.jsx';
import UserForm from './components/UserForm.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import LogOutForm from './components/LogOutForm.jsx';
import {
  registerUser,
  editUser,
  loginUser,
  verifyToken,
} from "./services/users-helper.js";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      registerFormData: {
      name: "",
      username: "",
      password: "",
      email: "",
      bio: "",
    },
    editFormData: {
      name: "",
      username: "",
      password: "",
      email: "",
      bio: "",
    },
    loginFormData: {
      email: "",
      password: ""
    },
    toggleLogin: true,
    currentUser: null,
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleLoginFormChange = this.handleLoginFormChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleToggleLocalRegister = this.handleToggleLocalRegister.bind(this);
    this.handleEditUser = this.handleEditUser.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleRegisterFormChange = this.handleRegisterFormChange.bind(this);
  }
  componentDidMount() {
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      this.setState({
        currentUser: user
      })
    }
  }

  async handleLogin() {
      const token = await loginUser(this.state.loginFormData);
      const userData = decode(token.jwt)
      this.setState({
        currentUser: userData
      })
      localStorage.setItem("jwt", token.jwt)
    }

handleRegisterClick(e) {
  e.preventDefault();
  this.setState((prevState, newState) => ({
    toggleLogin: !prevState.toggleLogin
  }));
}

handleLoginClick(e) {
  e.preventDefault();
  this.setState((prevState, newState) => ({
    toggleLogin: !prevState.toggleLogin
  }));
  this.props.history.push(`/user/${this.state.currentUser.id}/username/${this.state.currentUser.username}`)
}

handleToggleLocalRegister(e) {
  e.preventDefault();
  const { name, value } = e.target;
  this.setState((prevState, newState) => ({
    registerFormData: {
      ...prevState.registerFormData,
      [name]: !prevState.value
    }
  }));
}

handleLoginFormChange(e) {
  const { name, value } = e.target;
  this.setState(prevState => ({
    loginFormData: {
      ...prevState.loginFormData,
      [name]: value
    }
  }));
}
handleRegisterFormChange(e) {
  const { name, value } = e.target;
  console.log("handleRegisterChange name, val", name, value);
  this.setState(prevState => ({
    registerFormData: {
      ...prevState.registerFormData,
      [name]: value
    },
    editFormData: {
      ...prevState.editFormData,
      [name]: value
    }
  }));
}
async handleRegister(e) {
  e.preventDefault();
  const currentUser = await registerUser(this.state.registerFormData);
  console.log(currentUser);
  this.setState((prevState, newState) => ({
    currentUser: currentUser.user,
    registerFormData: {
      name: "",
      username: "",
      password: "",
      email: "",
      bio: ""
    },
  }));
  this.props.history.push(`/home`);
}

async handleEditUser(e) {
  e.preventDefault()
  const currentUser = await editUser(this.state.currentUser.id, this.state.editFormData)
  console.log(currentUser);
  this.setState((prevState, newState) => ({
    currentUser: currentUser.newUser,
  }));
  debugger

  this.props.history.push(`/user/${this.state.currentUser.id}/username/${this.state.currentUser.username}`);
}

handleLogout() {
  localStorage.removeItem("jwt");
  this.setState({
    currentUser: null,
    toggleLogin: true,
  });
  this.props.history.push(`/`);
}

  render() {
    return (
      <div className="App">
      <h1 className="main-title">
            <Link to="/">Memory Maps</Link>
          </h1>
          <Route
        exact
        path="/"
        render={props => (
          <>
            <LoginForm
              {...props}
              // show={this.state.currentUser.id}
              toggle={this.state.toggleLogin}
              onChange={this.handleLoginFormChange}
              onSubmit={this.handleLogin}
              email={this.state.loginFormData.email}
              password={this.state.loginFormData.password}
              onClick={this.handleLoginClick}
              register={this.handleRegisterClick}
            />
          <UserForm
            {...props}
            title={"Register User"}
            onClick={this.handleLoginClick}
            // show={this.state.currentUser.id}
            toggle={this.state.toggleLogin}
            onChange={this.handleRegisterFormChange}
            onSubmit={this.handleRegister}
            first_name={this.state.registerFormData.first_name}
            last_name={this.state.registerFormData.last_name}
            username={this.state.registerFormData.username}
            email={this.state.registerFormData.email}
            password={this.state.registerFormData.password}
            submitButtonText="Submit"
            backButtonText="Back to Login"
            passwordAsk={true}
            toggleLocal={this.state.handleToggleLocalRegister}
          />
          </>
        )}
      />
      <Route
          exact
          path="/home"
          render={Home}/>
      <Route
          exact
          path="/logout"
          render={props => (
            <LogOutForm {...props} handleLogout={this.handleLogout} />
          )}
        />
        <Route exact path="/contact" render={() => <Contact />} />
        <Footer
          handleLogout={this.handleLogout}
          show={this.state.currentUser}
          userData={this.state.userData}
        />
      </div>
    );
  }
}

export default withRouter(App);
