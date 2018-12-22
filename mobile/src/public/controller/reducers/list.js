const initialState = {
    dataPopular: [],
    dataTrending: [],
    dataTopAll: []
}

const list = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TRENDING":
            state = {
                dataTrending: action.payload
            }
            return state;
        case "GET_POPULAR":
            state = {
                dataPopular: action.payload
            }
            return state;
        case "GET_TOP_ALL":
            state = {
                dataTopAll: action.payload
            }
            return state;
        default:
            return state;
    }
}

export default list;