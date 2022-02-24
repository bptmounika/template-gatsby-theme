import React from "react";
import { Link } from "gatsby";

function Homepage({ pageContext: { pageSlug } }) {
  const path = `/${pageSlug}/`;
  return (
    <div>
      <h4>
        <Link to="/">Homepage</Link> | <Link to={path}>Second Page</Link>
      </h4>
      <h1>Homepage</h1>
      <h2>
        This page is generated by{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          gatsby-theme-demo
        </span>
        .
      </h2>
      <p>
        Change #<span style={{ color: "red", fontWeight: "bold" }}> 1</span>.
      </p>
    </div>
  );
}

export default Homepage;