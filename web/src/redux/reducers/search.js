const initialState = {
    search: []
}

const counter = (state = initialState, action)=>{
    switch (action.type){
        case "ADD_SEARCH":
         const newState ={
             search:action.payload
         }
         return newState;
         default: 
         return state;
    }
}

export default counter;