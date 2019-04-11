import React from "react";
import { withRouter } from "react-router-dom";

const CountryComments = props => {
  const { commentData } = props;
  console.log("commentList: props.commentList", commentData);
  return (
    <div className="country-comment-list">
      {this.commentData.map((comment, index) => (
        <div className="comment-container">
          <div className="comment-information">
            <p>Favorite Food: {comment.fave_food}</p>
            <p>Favorite City: {comment.fave_city}</p>
            <p>Favorite Site: {comment.fave_site}</p>
            <p>Would you revisit? : {comment.would_revisit}</p>
            <p>What was the biggest surprise you encountered?: {comment.biggest_surprise}</p>
              </div>
            </div>
          ))}
    </div>
  );
};
export default withRouter(CountryComments);
