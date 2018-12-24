const initialState = {
    detailData: {
        detailAnime: [{title: 'Anime Detail', thumbnail: ''}],
        genres: [{title: ''}]
    },
    relatedData: [],
    episodeData: [],
    isLoading: false,
    isError: false
}

const anime = (state = initialState, action) => {
    switch (action.type) {
        
        case "GET_DETAIL_PENDING":
            return {...state, isLoading: true}
        case "GET_DETAIL_FULFILLED":
            return {...state, isLoading: false, detailData: action.payload.data.results}
        case "GET_DETAIL_REJECTED":
            return {...state, isLoading: false, isError: true}
        
        case "GET_RELATED_PENDING":
            return {...state, isLoading: true}
        case "GET_RELATED_FULFILLED":
            return {...state, isLoading: false, relatedData: action.payload.data.result[0]}
        case "GET_RELATED_REJECTED":
            return {...state, isLoading: false, isError: true}
    
        case "GET_EPISODE_PENDING":
            return {...state, isLoading: true}
        case "GET_EPISODE_FULFILLED":
            return {...state, isLoading: false, episodeData: action.payload.data.results.listVideo}
        case "GET_EPISODE_REJECTED":
            return {...state, isLoading: false, isError: true}
        
        default:
            return state;
    }
}

export default anime;