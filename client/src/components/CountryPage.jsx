import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import CountryComments from './CountryComments';
import { fetchCountries } from '../services/countries-helper.js';

class CountryPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      countryData: "",
      countryComments: "",
      has_data: false,
    }
  }
  async componentDidMount() {
  await this.getCountryData();
}
async getCountryData() {
    const countryData = await fetchCountries(this.props.match.params.id);
    console.log(countryData);
    // const countryComments = await fetchCountryComments(
    //   this.props.match.params.id
    // );
    this.setState((prevState, newState) => ({
      countryData: countryData,
      // countryComments: countryComments,
      has_data: true
    }));
  }
  render(){
    return (
      <div>
      <h1>Country Information</h1>
      <h2>{this.state.countryData.name}</h2>
      </div>
    )
  }
}
export default CountryPage;
