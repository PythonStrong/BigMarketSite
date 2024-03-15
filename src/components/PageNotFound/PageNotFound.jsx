import React from "react";
import './pagenotfound.css'
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="pare">
      <div class="mars"></div>
      <img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" />
      <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" />
      <p class="title">Oh no!!</p>
      <p class="subtitle">
        You have entered an invalid URL <br /> , please correct or
        Return to home page
      </p>
      <div align="center">
        <Link  class="btn-back" to='/'>
          Back to previous page
        </Link>
      </div>
      <img
        src="https://assets.codepen.io/1538474/astronaut.svg"
        class="astronaut"
      />
      <img
        src="https://assets.codepen.io/1538474/spaceship.svg"
        class="spaceship"
      />
    </div>
  );
}
