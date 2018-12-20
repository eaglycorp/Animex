import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {AnimeAll} from '../../../redux/actions/getAnime';

class Cards extends React.Component{
  componentDidMount(){
    axios.get('https://animeapp1.herokuapp.com/api?sort=Popular&content=10&page=1')
    .then(res=>{
      this.props.dispatch(AnimeAll(res.data.results))
    })
    .catch(err=>{
      alert(err)
    })
  }

  render(){
    return (
      this.props.cards.card.map((item,key)=>
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
    cards: state.cardAnime
  }
}

export default connect (mapStateToProps)(Cards);