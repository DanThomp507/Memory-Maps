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
    <h1>Home Page </h1>
    {
    <Map />
  }
    </div>
    )
  }
}
export default Home;
