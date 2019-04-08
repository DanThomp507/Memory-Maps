import React, { Component } from "react";
import { createNewComment } from "../services/users-helpers";
import { withRouter, Link } from "react-router-dom";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentData: {
        fave_food: '',
        fave_city: '',
        fave_site: '',
        would_revisit: null,
        biggest_surprise: '',
      }
    };
    this.handleCommentFormChange = this.handleCommentFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
async handleSubmit(e){
  e.preventDefault();
  const resp = await createNewComment(this.props.match.params.id, this.state.commentData);
  console.log(resp);
  this.setState(prevState => ({
    commentData: {
      ...prevState.commentData
    }
  }))
}

async componentDidMount() {
  this.setState(prevState => ({
    commentData: {
      ...prevState.commentData,
      countryId: this.props.match.params.id
    }
  }));
}
  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <h2>Comment Form</h2>
        <label htmlFor="fave_food">What was your favorite food?</label>
        <input
          type="text"
          name="fave_food"
          value={this.props.fave_food}
          id="fave_food"
          className="fave_food"
          onChange={this.handleCommentFormChange}
        />
        <label htmlFor="fave_city">What was your favorite city?</label>
        <input
          type="text"
          name="fave_city"
          value={this.props.fave_city}
          id="fave_city"
          className="fave_city"
          onChange={this.handleCommentFormChange}
        />
        <label htmlFor="fave_site">What was your favorite site?</label>
        <input
          type="text"
          name="fave_site"
          value={this.props.fave_site}
          id="fave_site"
          className="fave_site"
          onChange={this.handleCommentFormChange}
        />
        <label htmlFor="would_revisit">Would you revisit?</label>
        <input
          type="text"
          name="would_revisit"
          value={this.props.would_revisit}
          id="would_revisit"
          className="would_revisit"
          onChange={this.handleCommentFormChange}
        />
        <label htmlFor="biggest_surprise">What was the biggest surprise?</label>
        <input
          type="text"
          name="biggest_surprise"
          value={this.props.biggest_surprise}
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
