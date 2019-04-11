import React, { Component } from "react";
import { createNewBlogPost } from "../services/countries-helper";
import { withRouter, Link } from "react-router-dom";

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogData: {
        title: '',
        body: '',
        country_id: '',
      }
    };
    this.handleBlogFormChange = this.handleBlogFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleBlogFormChange(e) {
  const { name, value } = e.target;
  this.setState(prevState => ({
    blogData: {
      ...prevState.blogData,
      [name]: value
    }
  }));
}
async handleSubmit(e){
  e.preventDefault();
  const resp = await createNewBlogPost(this.props.match.params.country_id, this.state.blogData);
  this.setState(prevState => ({
    blogData: {
      ...prevState.blogData
    }}))
  console.log('this is from handleSubmit in blogform', this.state.blogData)
  this.props.history.push(`/countries/${this.props.match.params.country_id}/`)
}

async componentDidMount() {
  this.setState(prevState => ({
    blogData: {
      ...prevState.blogData,
      country_id: this.props.match.params.country_id
    }
  }));
}
  render() {
    return (
      <form className="blog-form" onSubmit={this.handleSubmit}>
        <h2 className="blog-header">Write your thoughts</h2>
        <input
          type="text"
          name="title"
          value={this.state.blogData.title}
          id="title"
          className="blog-title"
          placeholder="Title"
          onChange={this.handleBlogFormChange}
        />
        <textarea
          type="text"
          name="body"
          placeholder="Blog Body"
          value={this.state.blogData.body}
          id="body"
          className="blog-body"
          onChange={this.handleBlogFormChange}
        />
        <button type="submit">
        Submit
        </button>
      </form>
    );
  }
}

export default withRouter(BlogForm);
