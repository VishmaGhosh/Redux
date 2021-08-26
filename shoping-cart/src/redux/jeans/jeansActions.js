import {FETCH_JEANS_REQUEST, FETCH_JEANS_SUCCESS, FETCH_JEANS_FAILURE } from "./jeansTypes";
import axios from "axios"

export const fetchJeansRequest = () => {
    return{
        type: FETCH_JEANS_REQUEST
    }
}
export const fetchJeansSuccess = (jeans) => {
    return{
        type: FETCH_JEANS_SUCCESS,
        payload: jeans
    }
}
export const fetchJeansFailure = (error) => {
    return{
        type: FETCH_JEANS_FAILURE,
        payload: error
    }
}

export const fetchJeans = () => {
    return (dispatch) => {
        dispatch(fetchJeansRequest)
        axios.get('http://localhost:3000/item/0')
        .then(res => {
            const jeans = res.data.jeansList
            dispatch(fetchJeansSuccess(jeans))
        },[])
        .catch(error => {
            const errorMsg =  error.message
            dispatch(fetchJeansFailure(errorMsg))
        })
    }
}