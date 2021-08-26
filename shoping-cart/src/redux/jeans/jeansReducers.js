import {FETCH_JEANS_REQUEST, FETCH_JEANS_SUCCESS, FETCH_JEANS_FAILURE } from "./jeansTypes";
const initialState = {
    loading: false,
    jeans: [],
    error: ''
}


const jeansReducers = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_JEANS_REQUEST:
                return{
                    ...state,
                    loading:true
                }
        case FETCH_JEANS_SUCCESS:
            return{
                loading:false,
                jeans: action.payload,
                error: ''
            }
        case FETCH_JEANS_FAILURE:
            return{
                loading:false,
                jeans: [],
                error: action.payload
            }
        default:
            return state        

    }
}

export default jeansReducers