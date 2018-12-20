import React from 'react';

import Nav from '../components/nav';
import Cards from '../../home/components/cards/cardMovie';

export default class Movies extends React.Component{
  render(){
    return(
      <div>
        <div>
          <Nav/>
        </div>
        <article className="card-post" style={{marginTop:70}}>
          <div className="container">
            <div className="row">
              <Cards/>
            </div>
          </div>
        </article>
      </div>
    )
  }
}