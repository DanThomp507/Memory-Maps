import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  const { show, currentUser } = props;
  return (
    <div className="footer">
      <div className="footer-text">
        {show && (
          <>
            <Link
            to={"/user/profile"}
            >
            Profile
            </Link>
            <Link to="/contact">Contact</Link>
            <Link to="/logout">Logout</Link>
          </>
        )}
        <a href="https://github.com/DanThomp507/Memory-Maps">Github</a>
      </div>
    </div>
  );
};
export default Footer;
