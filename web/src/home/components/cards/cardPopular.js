import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {AnimePopular} from '../../../redux/actions/getAnime';

class Cards extends React.Component{
  componentDidMount(){
    axios.get('http://192.168.0.37:3333/api?sort=Popular&content=10&page=1')
    .then(res=>{
      this.props.dispatch(AnimePopular(res.data.results))
      console.log(res.data)
    })
    .catch(err=>{
      alert(err)
    })
  }

  render(){
    return (
      this.props.cards.cardPopular.map((item,key)=>
        <div className="movie-card">
        <Link to={'/movies/details/'+ item.id}>
          <img className="movie-header" src={item.thumbnail} style={{backgroundSize:'cover'}}/>
          <div className="movie-content">
            <div className="movie-info">
              <div className="info-section">
                <label>Status</label>
                <span>{item.status}</span>
              </div>
              <div className="info-section">
                <label>Views</label>
                <span>{item.view}</span>
              </div>
              <div className="info-section">
                <label>Score</label>
                <span>{item.score}</span>
              </div>
            </div>
          </div>
        </Link>
        </div>
      )
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    cards: state.cardPopular
  }
}

export default connect (mapStateToProps)(Cards);