const initialState = {
    episode: []
}

const card = (state = initialState, action)=>{
    switch (action.type){
        case "ADD_EPS":
         const pop ={
             episode:action.payload
         }
         return pop;
         default: 
         return state;
    }
}

export default card;