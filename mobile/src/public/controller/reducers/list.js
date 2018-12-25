const initialState = {
    popularData: [],
    popularPage: 1,
    popularLastPage: 1,

    trendingData: [],
    trendingPage: 1,
    trendingLastPage: 1,
    
    topAllData: [],
    topAllPage: 1,
    topAllLastPage: 1,
    
    genreData: [],
    genreList: [{title: ''}],
    genreTitle: '',
    
    randomData: [{detailAnime: {title: '', thumbnail: ''}}],
    
    isLoading: false,
    isError: false,
    
}

const list = (state = initialState, action) => {
    switch (action.type) {
        case "GET_POPULAR_PENDING":
            return {...state, isLoading: true}
        case "GET_POPULAR_FULFILLED":
            return {
                ...state,
                isLoading: false,
                popularData: [...state.popularData, ...action.payload.data.results],
                popularPage: state.popularPage + 1,
                popularLastPage: action.payload.data.lastPage
            }
        case "GET_POPULAR_REJECTED":
            return {...state, isLoading: false, isError: true}
        
        case "GET_TRENDING_PENDING":
            return {...state, isLoading: true}
        case "GET_TRENDING_FULFILLED":
            return {
                ...state,
                isLoading: false,
                trendingData: [...state.trendingData, ...action.payload.data.results],
                trendingPage: state.trendingPage + 1,
                trendingLastPage: action.payload.data.lastPage
            }
        case "GET_TRENDING_REJECTED":
            return {...state, isLoading: false, isError: true}
    
        case "GET_TOP_ALL_PENDING":
            return {...state, isLoading: true}
        case "GET_TOP_ALL_FULFILLED":
            return {
                ...state,
                isLoading: false,
                topAllData: [...state.topAllData, ...action.payload.data.results],
                topAllPage: state.topAllPage + 1,
                topAllLastPage: action.payload.data.lastPage
            }
        case "GET_TOP_ALL_REJECTED":
            return {...state, isLoading: false, isError: true}
        
        case "GET_RANDOM_PENDING":
            return {...state, isLoading: true}
        case "GET_RANDOM_FULFILLED":
            return {...state, isLoading: false, randomData: action.payload.data.results}
        case "GET_RANDOM_REJECTED":
            return {...state, isLoading: false, isError: true}
        
        case "GET_GENRE_ANIME_PENDING":
            return {...state, isLoading: true, genreData: []}
        case "GET_GENRE_ANIME_FULFILLED":
            return {...state, isLoading: false, genreData: action.payload.data.results}
        case "GET_GENRE_ANIME_REJECTED":
            return {...state, isLoading: false, isError: true}
        
        case "GET_GENRE_LIST_PENDING":
            return {...state, isLoading: true}
        case "GET_GENRE_LIST_FULFILLED":
            return {...state, isLoading: false, genreList: action.payload.data.data}
        case "GET_GENRE_LIST_REJECTED":
            return {...state, isLoading: false, isError: true}
        
        case "GET_GENRE_TITLE":
            return {...state, genreTitle: action.payload}
        
        default:
            return state;
    }
}

export default list;