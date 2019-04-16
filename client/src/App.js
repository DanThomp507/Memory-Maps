import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";
import decode from "jwt-decode";
import Home from "./components/Home.jsx";
import Map from "./components/Map.jsx";
import LoginForm from "./components/LoginForm.jsx";
import UserForm from "./components/UserForm.jsx";
import CountryPage from "./components/CountryPage.jsx";
import CountryBlogs from "./components/CountryBlogs.jsx";
import CountryComments from "./components/CountryComments.jsx";
import CommentForm from "./components/CommentForm.jsx";
import BlogForm from "./components/BlogForm.jsx";
import Footer from "./components/Footer.jsx";
import LogOutForm from "./components/LogOutForm.jsx";
import UserProfile from "./components/UserProfile.jsx";
import {
  registerUser,
  editUser,
  loginUser,
  deleteUser
} from "./services/users-helper.js";
import {
  createNewComment,
  fetchCountries,
  createNewBlogPost,
  fetchCountry,
  deleteCountryComment,
  deleteCountryBlog
} from "./services/countries-helper.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerFormData: {
        name: "",
        username: "",
        password: "",
        email: "",
        bio: ""
      },
      editFormData: {
        name: "",
        username: "",
        password: "",
        email: "",
        bio: ""
      },
      loginFormData: {
        email: "",
        password: ""
      },
      countryData: [],
      toggleLogin: true,
      currentUser: {}
    };
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
  async componentDidMount() {
    await this.getCountries();
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      this.setState({
        currentUser: user,
        editFormData: {
          name: user.name,
          username: user.username,
          password: user.password,
          email: user.email,
          bio: user.bio
        }
      });
    }
  }
  async handleLogin(e) {
    e.preventDefault();
    const token = await loginUser(this.state.loginFormData);
    const userData = decode(token.jwt);
    this.setState({
      loginFormData: {
        email: "",
        password: ""
      },
      currentUser: userData
    });
    localStorage.setItem("jwt", token.jwt);
    this.props.history.push(`/home`);
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
    this.props.history.push(`/home`);
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
      }
    }));
    this.props.history.push(`/home`);
  }

  async handleEditUser(e) {
    e.preventDefault();
    const currentUser = await editUser(
      this.state.currentUser.id,
      this.state.editFormData
    );
    console.log(currentUser);
    this.setState((prevState, newState) => ({
      currentUser: currentUser.newUser,
      editFormData: currentUser
    }));
    this.props.history.push(`/user/edit/`);
  }

  handleLogout() {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null,
      toggleLogin: true
    });
    this.props.history.push(`/`);
  }

  async getCountries() {
    const countryData = await fetchCountries();
    this.setState({
      countryData: countryData.data
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="main-title">
            <Link to="/home">Memory Maps</Link>
          </h1>
        </header>
        <Route
          exact
          path="/"
          render={props => (
            <>
              <LoginForm
                {...props}
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
                toggle={this.state.toggleLogin}
                onChange={this.handleRegisterFormChange}
                onSubmit={this.handleRegister}
                name={this.state.registerFormData.name}
                bio={this.state.registerFormData.bio}
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
          path="/user/profile"
          render={props => (
            <UserProfile
              {...props}
              currentUser={this.state.currentUser}
              deleteUserProfile={this.deleteUserProfile}
            />
          )}
        />
        <Route
          exact
          path="/home"
          render={props => (
            <Home
              {...props}
              className="home"
              show={this.state.currentUser}
              userData={this.state.userData}
              countryData={this.state.countryData}
            />
          )}
        />
        <Route
          exact
          path="/user/edit/"
          render={props => (
            <UserForm
              {...props}
              title={"Edit User"}
              onClick={this.handleLoginClick}
              show={this.state.currentUser}
              toggle={!this.state.toggleLogin}
              onChange={this.handleRegisterFormChange}
              onSubmit={this.handleEditUser}
              name={this.state.editFormData.name}
              username={this.state.editFormData.username}
              email={this.state.editFormData.email}
              password={this.state.registerFormData.password}
              submitButtonText="Submit"
              backButtonText="Back to Profile"
              passwordAsk={false}
              toggleLocal={this.state.handleToggleLocalRegister}
            />
          )}
        />
        <Route
          exact
          path="/countries/:country_id/comments/new"
          component={CommentForm}
        />
        <Route
          exact
          path="/countries/:country_id/blogs/new"
          render={BlogForm}
        />
        <Route
          exact
          path="/countries/:id/"
          render={props => (
            <CountryPage
              {...props}
              countryData={this.state.countryData}
              // commentData={this.state.commentData}
              // blogData={this.state.blogData}
            />
          )}
        />
        <Route
          exact
          path="/logout"
          render={props => (
            <LogOutForm {...props} handleLogout={this.handleLogout} />
          )}
        />
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
