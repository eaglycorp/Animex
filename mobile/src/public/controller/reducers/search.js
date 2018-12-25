const initialState = {
    searchData: [],
    searchPlaceholder: 'type to search',
    searchPage: 1,
    searchLastPage: 1,
    isLoading: false,
    isError: false,
    
}

const search = (state = initialState, action) => {
    switch (action.type) {
        
        case "GET_SEARCH_PENDING":
            return {...state, isLoading: true}
        case "GET_SEARCH_FULFILLED":
            if(action.payload.data.total === 0) return {...state, isLoading: false, searchPlaceholder: 'No result'}
            else return {
                ...state,
                isLoading: false,
                searchData: [...state.searchData, ...action.payload.data.results],
                searchPage: state.searchPage + 1,
                searchLastPage: action.payload.data.lastPage,
                searchPlaceholder: ''
            }
        case "GET_SEARCH_REJECTED":
            return {...state, isLoading: false, isError: true}
        
        default:
            return state;
    }
}

export default search;