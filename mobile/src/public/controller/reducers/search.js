const initialState = {
    searchData: [],
    searchPlaceholder: 'type to search',
    isLoading: false,
    isError: false,
    
}

const search = (state = initialState, action) => {
    switch (action.type) {
        
        case "GET_SEARCH_PENDING":
            return {...state, isLoading: true, searchData: []}
        case "GET_SEARCH_FULFILLED":
            if(action.payload.data.total === 0) return {...state, isLoading: false, searchPlaceholder: 'No result'}
            else return {...state, isLoading: false, searchData: action.payload.data.results, searchPlaceholder: ''}
        case "GET_SEARCH_REJECTED":
            return {...state, isLoading: false, isError: true}
        
        default:
            return state;
    }
}

export default search;