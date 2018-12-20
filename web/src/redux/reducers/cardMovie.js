const initialState = {
    cardMovie: []
}

const card = (state = initialState, action)=>{
    switch (action.type){
        case "ADD_MOVALL":
         const pop ={
             cardMovie:action.payload
         }
         return pop;
         default: 
         return state;
    }
}

export default card;