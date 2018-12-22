import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../../assets/css/bootstrap.css';
import '../../../assets/css/bootstrap3.css';
import '../../../assets/css/aa.scss';
import '../../../assets/css/parrallax.css';

import * as actionCreate from '../../../redux/actions/getAnime';
import { getMovieAll } from './../../../redux/actions/getAnime';

class Cards extends React.Component{
//   componentDidMount(){
//     axios.get('https://animeapp1.herokuapp.com/api?sort=Popular&content=10&page=1')
//     .then(res=>{
//       this.props.dispatch(AnimeAll(res.data.results))
//     })
//     .catch(err=>{
//       alert(err)
//     })
//   }

    componentDidMount(){
        if (this.props.typeList === 'Pop'){
            this.props.getAnimePop()
         } else if (this.props.typeList === 'Top') {
           this.props.getAnimeTop()
         } else if(this.props.typeList === 'Search'){
           this.props.getSearch()
         } else {
           this.props.getMovie()
         }
    }

  cardMovie(){
    return (
        this.props.cardMovie.cardMovie.map((item,key)=>
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

  cardPopular(){
    return (
        this.props.cardPopular.cardPopular.map((item,key)=>
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

  cardTopAll(){
    return(
    this.props.cardTopAll.cardTopAll.map((item,key)=>
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
    ))
  }

  cardSearch(){
    return(
    this.props.cardSearch.cardSearch.map((item,key)=>
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
    ))
  }

  render(){
    switch(this.props.typeList){
        case "Pop":
        return(<div>{this.cardPopular()}</div>)
        case "Top":
        return(<div>{this.cardTopAll()}</div>)
        case "Movie":
        return(<div>{this.cardMovie()}</div>)
        case "Search":
        return(<div>{this.cardSearch()}{console.log(this.props.cardMovie.cardMovie)}</div>)
        default:
        return(console.log('Connection Errorr'))
      }
  }
}

const mapStateToProps = (state)=>{
  return state
}

export default connect (mapStateToProps, actionCreate)(Cards);