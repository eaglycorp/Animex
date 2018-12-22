import axios from 'axios';

export function AnimePopular(item){
    return{
        type: "ADD_ANIMPOP",
        payload: item
    }
}

export function AnimeTopAll(item){
    return{
        type: "ADD_ANIMTOP",
        payload: item
    }
}

export function MovieAll(item){
    return{
        type: "ADD_MOVALL",
        payload: item
    }
}

export function AnimeAll(item){
    return{
        type: "ADD_ANIMALL",
        payload: item
    }
}

export function Eps(item){
    return{
        type: "ADD_EPS",
        payload: item
    }
}
export function Details(item){
    return{
        type: "ADD_DETAILS",
        payload: item
    }
}
export function Genre(item){
    return{
        type: "ADD_GENRE",
        payload: item
    }
}
export function Url(url){
    return{
        type: "ADD_URL",
        payload: url
    }
}

export function Search(nama){
    return{
        type: "ADD_SEARCH",
        payload: nama
    }
}

export function dispatchURL(url){
    return(dispatch)=>{
        return dispatch(Url(url))
    }
}
export function getAnimePop(){
    return(dispatch)=>{
        return axios.get('https://animeapp1.herokuapp.com/api?sort=Popular&content=10&limit=10&page=1')
        .then((res)=>{
            dispatch(AnimePopular(res.data.results))
           // console.log('action', res.data.results)
        })
    }   
}

export function getAnimeTop(){
    return(dispatch)=>{
        return axios.get('https://animeapp1.herokuapp.com/api?sort=TopAll&content=10&limit=10&page=1')
        .then((res)=>{
            dispatch(AnimeTopAll(res.data.results))
           // console.log('action', res.data.results)
        })
    }
}

export function getMovie(){
    return(dispatch)=>{
        return axios.get('https://animeapp1.herokuapp.com/api?sort=Movie&content=10&page=1')
        .then((res)=>{
            dispatch(MovieAll(res.data.results))
           //console.log('action', res.data.results)
        })
    }
}

export function getEpsVid(id){
    return(dispatch)=>{
        return axios.get('https://animeapp1.herokuapp.com/api/anime/'+ id +'/video')
        .then((res)=>{
            dispatch(Eps(res.data.results.listVideo))
            //console.log('debug'+JSON.stringify(res.data.results))
        })
        .catch(err=>{
            console.log('debug1'+err)
        })
    }
}

export function getDetailsVid(id){
    return(dispatch)=>{
        return axios.get('https://animeapp1.herokuapp.com/api/anime/'+ id)
        .then((res)=>{
            dispatch(Details(res.data.results.detailAnime))
            dispatch(Genre(res.data.results.genres))
            console.log('debug'+JSON.stringify(res.data.results.genres))
        })
        .catch((err)=>{
            console.log('debug1'+err)
        })
    }
}

export function getGenre(id){
    return(dispatch)=>{
        return axios.get('https://animeapp1.herokuapp.com/api/anime/'+ id)
        .then((res)=>{
            dispatch(Genre(res.data.results.genres))
            //console.log('debug genre'+JSON.stringify(res.data.results.genres))
        })
        .catch((err)=>{
            console.log('debug1'+err)
        })
    }
}

export function getSearch(nama){
    return(dispatch)=>{
        return axios.get('https://animeapp1.herokuapp.com/api?search='+nama+'&content=10&page=1')
        .then((res)=>{
            dispatch(Search(res.data.results))
            //console.log('debug'+JSON.stringify(res.data.results))
        })
        .catch((err)=>{
            console.log('debug1'+err)
        })
    }
}