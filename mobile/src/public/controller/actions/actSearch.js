import axios from 'axios';

const baseURL = 'https://animeapp1.herokuapp.com/api';
const content = 10;

export const getSearchResult = (input, pageNo) => {
  return {
    type: 'GET_SEARCH',
    payload: axios.get(`${baseURL}?search=${input}&content=${content}&page=${pageNo}`)
  }
}