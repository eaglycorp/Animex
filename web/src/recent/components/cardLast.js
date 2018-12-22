import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {AnimeAll} from '../../redux/actions/getAnime';

class Cards extends React.Component{
  base_url = 'https://animeapp1.herokuapp.com/api'

  constructor(){
    super();
    this.state ={
        page: 1
    }
}

  componentDidMount(){
    this.getContent()
  }

  getContent(){
    axios.get(this.base_url+'?sort=Movie&content=10&page='+this.state.page)
    .then(res=>{
      this.props.dispatch(AnimeAll(res.data.results))
    })
    .catch(err=>{
      alert(err)
    })
  }

  render(){
    return (
    <div>
    <div>
      {this.props.cards.cardTopAll.map((item,key)=>
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
      )}
      </div>
      {/*page*/}
      <div style={{marginTop: '1%'}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <div className="container">
            <a className="navbar-brand" onClick={()=>{
                if(this.state.page > 1){
                  this.setState({page: this.state.page-1})
                  this.getContent()
                }
            }}>
            <b className="glyphicon glyphicon-menu-left"></b>
            </a>
            <a className="navbar-brand" onClick={()=>
                {
                  this.setState({page: this.state.page+1})
                  this.getContent()
                }
              }>
            <b className="glyphicon glyphicon-menu-right"></b>
            </a>
          </div>
        </nav>

      </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    cards: state.cardTopAll
  }
}

export default connect (mapStateToProps)(Cards);