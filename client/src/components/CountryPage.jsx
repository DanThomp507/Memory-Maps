import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
// import CountryComments from './CountryComments';
import { fetchCountry, fetchCountryComments, fetchCountryBlogs } from '../services/countries-helper.js';

class CountryPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      countryData: "",
      countryComments: "",
      countryBlogs: "",
      has_data: false,
    }
    this.getCountryData = this.getCountryData.bind(this);
  }
  async componentDidMount() {
  await this.getCountryData();
}
async getCountryData() {
    const countryData = await fetchCountry(this.props.match.params.id);
    console.log(countryData);
    const countryComments = await fetchCountryComments(
      this.props.match.params.id
    );
    console.log(countryComments);
    const countryBlogs = await fetchCountryBlogs(
      this.props.match.params.id
    );
    console.log(countryBlogs);
    this.setState((prevState, newState) => ({
      countryData: countryData,
      countryComments: countryComments,
      countryBlogs: countryBlogs,
      has_data: true
    }));
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getCountryData();
      this.setState({
        has_data: true
      });
    }
  }
  render(){
    console.log(this.state.countryData.name)
    return (
      <div>
      <h2>{this.state.countryData.name}</h2>
      <div className="country-container">
      <button
              className="comment-button"
              onClick={() =>
                this.props.history.push(
                  `/countries/${this.props.match.params.id}/comments/new`
                )
              }
            >
              Comment
            </button>
            <button
                    className="blog-button"
                    onClick={() =>
                      this.props.history.push(
                        `/countries/${this.props.match.params.id}/blogs/new`
                      )
                    }
                  >
                    Write a Blog
                  </button>
                  </div>
      </div>
    )
  }
}
export default CountryPage;
