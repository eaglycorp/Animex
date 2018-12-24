import axios from 'axios';

const baseURL = 'https://animeapp1.herokuapp.com/api';

export const getSearchResult = (input, content, pageNo) => {
  return {
    type: 'GET_SEARCH',
    payload: axios.get(`${baseURL}?search=${input}&content=${content}&page=${pageNo}`)
  }
}