import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import CountryComments from './CountryComments';
import { fetchCountry } from '../services/countries-helper.js';

class CountryPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      countryData: {},
      countryComments: "",
      has_data: false,
    }
  }
  async componentDidMount() {
  await this.getCountryData();
}
async getCountryData() {
    const countryData = await fetchCountry(this.props.countryData.id);
    console.log(countryData);
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
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchCountries();
      this.setState({
        has_data: true
      });
    }
  }
  render(){
    return (
      <div>
      <h1>Country Information</h1>
      <h2>{this.state.countryData.name}</h2>
      <button
              className="station-button"
              onClick={() =>
                this.props.history.push(
                  `/countries/${this.props.match.params.id}/comments/new`
                )
              }
            >
              Comment
            </button>
      </div>
    )
  }
}
export default CountryPage;
