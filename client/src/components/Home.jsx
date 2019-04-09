import React, { Component } from "react";
import { Link } from "react-router-dom";
import Map from './Map';

class Home extends Component {
  constructor(){
    super()
  }
  render(){
  return (
    <div>
    {
    <Map
    countryData={this.props.countryData}
    />
  }
    </div>
    )
  }
}
export default Home;
