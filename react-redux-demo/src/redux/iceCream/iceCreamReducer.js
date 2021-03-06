import { BUY_ICECREAM } from "./iceCreamType";

const initialState = {
    numOfIceCreams:20,
    iceCreamCart:0,
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCreams : state.numOfIceCreams - 1,
                iceCreamCart: state.iceCreamCart + 1,
            }
        default:
            return state    
    }
}

export default iceCreamReducer