import axios from 'axios';

const baseURL = 'https://animeapp1.herokuapp.com/api';
const content = 10;

//====================================================axios

const getRandom = () => {
  return {
    type: 'GET_RANDOM',
    payload: axios.get(`${baseURL}?sort=random&content=1`)
  }
}

const getGenreAnime = (genre, pageNo) => {
    return {
      type: 'GET_GENRE_ANIME',
      payload: axios.get(`${baseURL}/genre/${genre}?content=${content}&page=${pageNo}`)
    }
  }

  const getGenreTitle = (genre) => {
    return {
      type: 'GET_GENRE_TITLE',
      payload: genre
    }
  }

  const getGenreList = (genre) => {
    return {
      type: 'GET_GENRE_LIST',
      payload: axios.get(`${baseURL}/genre`),
      title: genre
    }
  }

const getTrending = (pageNo) => {
    return {
      type: 'GET_TRENDING',
      payload: axios.get(`${baseURL}?sort=Trending&content=${content}&page=${pageNo}`)
    }
  }
  
const getPopular = (pageNo) => {
  return {
    type: 'GET_POPULAR',
    payload: axios.get(`${baseURL}?sort=Popular&content=${content}&page=${pageNo}`)
  }
}

const getTopAll = (pageNo) => {
  return {
    type: 'GET_TOP_ALL',
    payload: axios.get(`${baseURL}?sort=TopAll&content=${content}&page=${pageNo}`)
  }
}

export {
  getPopular,
  getTrending,
  getTopAll,
  getRandom,
  getGenreList,
  getGenreAnime,
  getGenreTitle
}