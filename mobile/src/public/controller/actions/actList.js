import axios from 'axios';

const baseURL = 'https://animeapp1.herokuapp.com/api';

//====================================================axios

// getTopAllAnime = (content) => {
//         axios.get(baseURL + '?sort=TopAll&content=' + content + '&page=1')
//         .then((res) => {
//             console.log(res.data.results)
//             this.setState({
//                 topAll: this.props.dispatch(getTopAll(res.data.results))
//             })
//         })
//         .catch((err) => {
//             alert(err)
//         })
// }

// getTrendingAnime = (content) => {
//     axios.get(baseURL + '?sort=Trending&content=' + content + '&page=1')
//     .then((res) => {
//         console.log(res.data.results)
//         this.setState({
//                 trending: this.props.dispatch(getTrending(res.data.results))
//             })
//         })
//         .catch((err) => {
//             alert(err)
//         })
//     }
    
    getPopularAnime = (content) => {
        axios.get(baseURL +'?sort=Popular&content=' + content + '&page=1')
        .then((res) => {
            console.log(res.data.results)
            return res.data.results
        })
        .catch((err) => {
            alert(err)
        })
    }

//====================================================axios

const getTrending = (data) => {
    return {
      type: 'GET_TRENDING',
      payload: data
    }
  }
  
const getPopular = (data) => {
  return {
    type: 'GET_POPULAR',
    payload: data
  }
}

const getTopAll = (data) => {
  return {
    type: 'GET_TOP_ALL',
    payload: data
  }
}
  
export {
  getTrending,
  getTopAll,
  getPopular
}