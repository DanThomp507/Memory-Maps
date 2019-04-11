import React from "react";
import { withRouter } from "react-router-dom";
import { deleteCountryBlog } from '../services/countries-helper.js';

const CountryBlogs = props => {
 const { countryBlogs } = props;
console.log("countryBlogs : countryBlogs:", countryBlogs);
return (
  <div className="country-blogs-container">
    {countryBlogs &&
      countryBlogs.map((blog, index) => (
        <div className="blog-container" key={index}>
          <div className="blog-information">
            <p className="blog-page-title">{blog.title}</p>
            <p>{blog.body}</p>
            <button
          className="delete-comment-button"
          onClick={() => props.destroyBlog(props.countryData.id, blog.id)}
        >
        Delete Blog
        </button>
                </div>
            </div>
          ))}
    </div>
  );
};
export default withRouter(CountryBlogs);
