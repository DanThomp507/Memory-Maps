import React, { Component } from "react";
import CountryComments from "./CountryComments";
import CountryBlogs from "./CountryBlogs";
import {
  fetchCountry,
  fetchCountryComments,
  fetchCountryBlogs,
  deleteCountryBlog,
  deleteCountryComment
} from "../services/countries-helper.js";

class CountryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: "",
      has_data: false
    };
    this.getCountryData = this.getCountryData.bind(this);
    this.destroyComment = this.destroyComment.bind(this);
    this.destroyBlog = this.destroyBlog.bind(this);
  }

  async componentDidMount() {
    await this.getCountryData();
  }

  async getCountryData() {
    const countryData = await fetchCountry(this.props.match.params.id);
    console.log(countryData);
    this.setState((prevState, newState) => ({
      countryData: countryData,
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
  async destroyComment(country_id, comment_id) {
    const deleteComment = await deleteCountryComment(country_id, comment_id);
  }
  async destroyBlog(country_id, blog_id) {
    const deleteBlog = await deleteCountryBlog(country_id, blog_id);
  }

  render() {
    return (
      <div className="country-profile-header">
        <h2>{this.state.countryData.name}</h2>
        <div className="country-button-container">
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
        <div className="country-comments-page-container">
          <h1>Comments</h1>
          <CountryComments
            destroyComment={this.destroyComment}
            countryData={this.state.countryData}
            countryComments={this.state.countryData.comments}
          />
        </div>
        <div className="country-blogs-page-container">
          <h1>Blog Posts </h1>
          <CountryBlogs
            destroyBlog={this.destroyBlog}
            countryBlogs={this.state.countryData.blogs}
            countryData={this.state.countryData}
          />
        </div>
      </div>
    );
  }
}
export default CountryPage;
