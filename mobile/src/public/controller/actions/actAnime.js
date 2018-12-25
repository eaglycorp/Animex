import axios from 'axios';

const baseURL = 'https://animeapp1.herokuapp.com/api';

const getAnimeDetail = (data) => {
  return {
    type: 'GET_DETAIL',
    payload: data
  }
}

const getRelated = (genre1, genre2) => {
  return {
    type: 'GET_RELATED',
    payload: axios.get(`${baseURL}/related?genrePertama=${genre1}&genreKedua=${genre2}&content=5&page=1`)
  }
}

const getEpisodeList = (animeId) => {
  return {
    type: 'GET_EPISODE',
    payload: axios.get(`${baseURL}/anime/${animeId}/video`)
  }
}

export {
  getAnimeDetail,
  getRelated,
  getEpisodeList
}