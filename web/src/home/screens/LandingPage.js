import React, {Component} from 'react';
import {connect} from 'react-redux';

import Nav from '../components/nav/index';
import Cards from '../components/cards/cardAnime'
import Carousel from '../components/carousel'

class LandingPage extends Component{
  render(){
    return(
      <div>
        <div>
          <Nav/>
        </div>
        <Carousel/>
        <article className="card-post">
          <div className="container">
            <h3 style={{marginTop:10}}>Recently Added</h3>
            <div className="row">
              <Cards/>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default LandingPage;