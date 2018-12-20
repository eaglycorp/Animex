const getAnime = (data) => {
    return {
      type: 'GET_ANIME',
      payload: data
    }
  }
    
  export {
    getAnime
  }