import React from 'react';
import {Link} from 'react-router-dom';

export default class Index extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container">
          <a className="navbar-brand" href="index.html">
          <img src="https://bit.ly/2EC6kKY"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">TV Shows</a>
              </li>
              <li className="nav-item">
              <Link to="/movies">
                <a className="nav-link" href="contact.html">Movies</a>
              </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Recently Added</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">My List</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <span className="glyphicon glyphicon-search"></span>
              <b className="nav-link" href="#">DVD</b>
              <span className="glyphicon glyphicon-bell"></span>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
