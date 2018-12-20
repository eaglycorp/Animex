const initialState = {
    cardPopular: []
}

const card = (state = initialState, action)=>{
    switch (action.type){
        case "ADD_ANIMPOP":
         const pop ={
             cardPopular:action.payload
         }
         return pop;
         default: 
         return state;
    }
}

export default card;