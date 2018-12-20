import React from 'react';
import axios from 'axios';

export default class VideoPlayer extends React.Component{
   constructor(){
        super()
        this.state={
            video:[],
            url:''
        }
    }

    componentDidMount(){
        this.detailsEps()
    }

    detailsEps(){
        axios.get('https://animeapp1.herokuapp.com/api/anime/'+ this.props.match.params.id+'/video')
        .then((res)=>{
            this.setState({
                video: res.data.results.listVideo,
                url: res.data.results.listVideo[0].video_embeded
            })
            //console.log('debug'+JSON.stringify(res.data.results.listVideo[0].video_embeded))
        })
    }

    render(){
    return(
        <div className="embed-responsive embed-responsive-16by9">
             <iframe allowFullScreen className="embed-responsive-item" src={this.state.url}></iframe> 
        </div>
        )
    }
}
