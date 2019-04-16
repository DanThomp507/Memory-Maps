import React, { Component } from "react";
import { createNewComment } from "../services/countries-helper";
import { withRouter } from "react-router-dom";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentData: {
        fave_food: "",
        fave_city: "",
        fave_site: "",
        would_revisit: null,
        biggest_surprise: "",
        country_id: ""
      }
    };
    this.handleCommentFormChange = this.handleCommentFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }

  handleCommentFormChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      commentData: {
        ...prevState.commentData,
        [name]: value
      }
    }));
  }
  async handleSubmit(e) {
    e.preventDefault();
    const resp = await createNewComment(
      this.props.match.params.country_id,
      this.state.commentData
    );
    console.log(resp);
    this.setState(prevState => ({
      commentData: {
        ...prevState.commentData
      }
    }));
    this.props.history.push(
      `/countries/${this.props.match.params.country_id}/`
    );
  }

  async componentDidMount() {
    this.setState(prevState => ({
      commentData: {
        ...prevState.commentData,
        country_id: this.props.match.params.country_id
      }
    }));
  }
  handleRadio(e) {
    const would_revisit = e.target.value === "true" ? true : false;
    console.log(would_revisit);
    this.setState(prevState => ({
      commentData: {
        ...prevState.commentData,
        would_revisit
      }
    }));
  }
  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <h2>Country Comments</h2>
        <label htmlFor="fave_food">What was your favorite food?</label>
        <input
          type="text"
          name="fave_food"
          value={this.state.fave_food}
          id="fave_food"
          className="fave_food"
          onChange={this.handleCommentFormChange}
        />
        <label htmlFor="fave_city">What was your favorite city?</label>
        <input
          type="text"
          name="fave_city"
          value={this.state.fave_city}
          id="fave_city"
          className="fave_city"
          onChange={this.handleCommentFormChange}
        />
        <label htmlFor="fave_site">What was your favorite site?</label>
        <input
          type="text"
          name="fave_site"
          value={this.state.fave_site}
          id="fave_site"
          className="fave_site"
          onChange={this.handleCommentFormChange}
        />
        <label htmlFor="would_revisit"> Would you revisit?</label>
        <input
          type="radio"
          name="would_revisit"
          onChange={this.handleRadio}
          value="true"
        />
        Yes
        <input
          type="radio"
          name="would_revisit"
          onChange={this.handleRadio}
          value="false"
        />
        No
        <label htmlFor="biggest_surprise">What was the biggest surprise?</label>
        <input
          type="text"
          name="biggest_surprise"
          value={this.state.biggest_surprise}
          id="biggest_surprise"
          className="biggest_surprise"
          onChange={this.handleCommentFormChange}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default withRouter(CommentForm);
