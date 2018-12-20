import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Movies extends React.Component{
    constructor(){
        super()
        this.state={
            details: [],
            video:[],
            url:''
        }
    }
    componentDidMount(){
        this.detailsVideo()
        //this.detailsEps()
    }

    detailsVideo(){
        axios.get('https://animeapp1.herokuapp.com/api/anime/'+ this.props.match.params.id)
        .then((res)=>{
            this.setState({
                details: res.data.results.detailAnime
            })
        })
    }

    render(){
        return(
          <article className="card-post">
            <div className="container">
            {this.state.details.map((item, key)=>
              <div className="contain">
                <Link to={'/movies/play/'+ item.id}><img src={item.thumbnail} style={{width:200.91,height:301.365, borderRadius:20}} alt="cover" className="cover" /></Link>
                <div className="hero">
                  <div className="details">      
                    <div className="title1">{item.title} - <span>{item.rating}</span></div>
                    <div className="title2">{item.status}</div>    
                    <span className="likes">{item.view} views</span>
                  </div>
                </div>
                <div className="description">
                  <div className="column1">
                    <span className="tag">{item.tahun}</span>
                    <span className="tag">{item.durasi} min</span>
                    <span className="tag">{item.score}</span>
                  </div>
                  <div className="column2">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            )}
            </div>
          </article>
        )
    }
}