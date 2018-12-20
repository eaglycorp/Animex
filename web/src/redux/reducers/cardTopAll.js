const initialState = {
    cardTopAll: []
}

const card = (state = initialState, action)=>{
    switch (action.type){
        case "ADD_ANIMTOP":
         const top ={
             cardTopAll:action.payload
         }
         return top;
         default: 
         return state;
    }
}

export default card;