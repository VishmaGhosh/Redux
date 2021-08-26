import {FETCH_TSHIRT_REQUEST, FETCH_TSHIRT_SUCCESS, FETCH_TSHIRT_FAILURE } from "./tshirtTypes";
const initialState = {
    loading: false,
    tshirt: [],
    error: ''
}


const tshirtReducers = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TSHIRT_REQUEST:
                return{
                    ...state,
                    loading:true
                }
        case FETCH_TSHIRT_SUCCESS:
            return{
                loading:false,
                tshirt: action.payload,
                error: ''
            }
        case FETCH_TSHIRT_FAILURE:
            return{
                loading:false,
                tshirt: [],
                error: action.payload
            }
        default:
            return state        

    }
}

export default tshirtReducers