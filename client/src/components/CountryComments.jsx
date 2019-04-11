import React from "react";
import { withRouter } from "react-router-dom";

const CountryComments = props => {
 const { countryComments } = props;
console.log("countryComments : countryComments:", countryComments);
return (
  <div className="country-comments-container">
    {countryComments &&
      countryComments.map((comment, index) => (
        <div className="comment-container" key={index}>
          <div className="comment-information">
            <p>Favorite Food: {comment.fave_food}</p>
            <p>Favorite City: {comment.fave_city}</p>
            <p>Favorite Site: {comment.fave_site}</p>
            <p>Would you revisit? : {comment.would_revisit}</p>
            <p>What was the biggest surprise you encountered?: {comment.biggest_surprise}</p>
            <button
          className="delete-comment-button"
          onClick={() => this.deleteComment()}
        >
        Delete Comment
        </button>
              </div>
            </div>
          ))}
    </div>
  );
};
export default withRouter(CountryComments);
