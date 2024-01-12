import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
class Links extends Component {
  render() {
    return (
      <div>
        <a href="http://blog.reabelx.com" _target="blank">
          Blog
        </a>{" "}
        |{" "}
        <a href="https://www.instagram.com/reabel/" _target="blank">
          Photography
        </a>{" "}
        |{" "}
        <a href="https://twitter.com/reabel" _target="blank">
          Social
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/ryan-reabel-a7a33712/"
          _target="blank"
        >
          LinkedIn
        </a>
      </div>
    );
  }
}

export default Links;
