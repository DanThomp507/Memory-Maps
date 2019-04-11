import React from "react";
import { withRouter } from "react-router-dom";

const CountryBlogs = props => {
 const { countryBlogs } = props;
console.log("countryBlogs : countryBlogs:", countryBlogs);
return (
  <div className="country-blogs-container">
    {countryBlogs &&
      countryBlogs.map((blog, index) => (
        <div className="blog-container" key={index}>
          <div className="blog-information">
            <p>Blog Title: {blog.title}</p>
            <p>Blog Body: {blog.body}</p>
              </div>
            </div>
          ))}
    </div>
  );
};
export default withRouter(CountryBlogs);
