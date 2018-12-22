import React from 'react';
import {Link, Redirect} from 'react-router-dom';

export default class Index extends React.Component {
  state={
    toHome: false,
    toSearch: false,
    search: '',
  }
  handleSubmit(e){
    if(e.key==='Enter'){
      e.preventDefault();
      this.setState({toSearch: true})
    }
  }
  handleChange(e){
    this.setState({search: e.target.value})
  }
  render() {
    if(this.state.toHome===true){
      return <Redirect to='/'/>
    }
    if(this.state.toSearch===true){
      return <Redirect to={'/search/'+this.state.search}/>
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container">
        <Link to ="/" className="navbar-brand">
          <b>Recently Added</b>
        </Link>
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
            <div class="search">
            <form className="form-inline my-2 my-lg-0">
              <input onChange={(e)=>this.handleChange(e)} onKeyPress={(event)=>this.handleSubmit(event)} style={{color:'#fff'}} type="text" class="form-control input-sm bg-dark" maxlength="50" placeholder="Search..." />
              <span className="glyphicon glyphicon-search"></span>
              <b className="nav-link" href="#">DVD</b>
              <span className="glyphicon glyphicon-bell"></span>
            </form>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
