import React, { Component } from 'react';
import "../styles/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Welcome to Sun Scraper!</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;