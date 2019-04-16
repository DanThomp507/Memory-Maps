import React, { Component } from "react";
import { Route } from "react-router-dom";
import Map from "./Map";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {
          <Route
            path="/home"
            render={props => (
              <Map {...props} countryData={this.props.countryData} />
            )}
          />
        }
      </div>
    );
  }
}
export default Home;
