const initialState = {
    genre: []
}

const card = (state = initialState, action)=>{
    switch (action.type){
        case "ADD_GENRE":
        const gen={
            genre: action.payload
        }
        return gen;
         default: 
         return state;
    }
}

export default card;