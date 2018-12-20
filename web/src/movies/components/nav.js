import React from 'react';
import {Link} from 'react-router-dom';

export default class Index extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container">
          <a className="navbar-brand" href="index.html">
          <b>Movies</b>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <div class="input-group">
                  <select className="form-control bg-dark" id="inputGroupSelect01">
                    <option selected>Genres&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
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
