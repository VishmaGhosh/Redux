import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    numOfCakes : 10,
    cakeCart:0,
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes - action.payload,
                cakeCart: state.cakeCart + 1,
            }
        default: return state    
    }
}

export default cakeReducer