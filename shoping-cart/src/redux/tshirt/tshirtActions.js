import { FETCH_TSHIRT_REQUEST, FETCH_TSHIRT_SUCCESS, FETCH_TSHIRT_FAILURE} from "./tshirtTypes";
import axios from "axios"

export const fetchTshirtRequest = () => {
    return{
        type: FETCH_TSHIRT_REQUEST
    }
}
export const fetchTshirtSuccess = (jeans) => {
    return{
        type: FETCH_TSHIRT_SUCCESS,
        payload: jeans
    }
}
export const fetchTshirtFailure = (error) => {
    return{
        type: FETCH_TSHIRT_FAILURE,
        payload: error
    }
}

export const fetchTshirt = () => {
    return (dispatch) => {
        dispatch(fetchTshirtRequest)
        axios.get('http://localhost:3000/item/1')
        .then(res => {
            const tshirt = res.data.TshirtList
            dispatch(fetchTshirtSuccess(tshirt))
        },[])
        .catch(error => {
            const errorMsg =  error.message
            dispatch(fetchTshirtFailure(errorMsg))
        })
    }
}