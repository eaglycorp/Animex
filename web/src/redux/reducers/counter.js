const initialState = {
    card: [
    ]
}

const counter = (state = initialState, action)=>{
    switch (action.type){
        case "ADD_COUNTER":
         const newState ={
             card:action.payload
         }
         return newState;
         default: 
         return state;
    }
}

export default counter;