const initialState = {
    anime: []
}

const anime = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ANIME":
            state = {
                anime: action.payload
            }
            return state;
        default:
            return state;
    }
}

export default anime;