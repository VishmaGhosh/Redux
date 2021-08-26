import { ADD_TO_CART } from "./cartTypes"
import {REMOVE_FROM_CART} from './cartTypes'

const initialState = {
    cartList:[],
    cartItem :0
}

const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                // cartList: action.payload,
                // cartList: [state.cartList, action.payload],
                cartList: action.payload,
                cartItem: action.payload.length
            }
        // case REMOVE_FROM_CART:
        //     return{
        //         ...state,
        //         // cartList: state.cartList.splice(action.payload,1),
        //         cartList: state.cartList.filter(item => item !==action.payload),
        //         cartItem: state.cartItem - 1
        //     }    
        default: return state    
    }
}

export default cartReducers