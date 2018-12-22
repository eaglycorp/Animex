const initialState = {
    details: []
}

const card = (state = initialState, action)=>{
    switch (action.type){
        case "ADD_DETAILS":
         const pop ={
             details:action.payload
         }
         return pop;
         default: 
         return state;
    }
}

export default card;