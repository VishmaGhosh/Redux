import axios from 'axios'
import { ADD_TO_CART } from './cartTypes'
import {REMOVE_FROM_CART} from './cartTypes'

export const addToCart = (cart=[]) => {
    return {
        type: ADD_TO_CART,
        payload: cart,
    }
}

export const removeFromCart = (id) => {
    return (dispatch) => {
        axios.delete('http://localhost:3000/cart/'+id,{
        })
        .then(res => {
        console.log(res);
        dispatch(fetchCart)
        },[])
    }
}

export const fetchCart = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/cart')
        .then(res => {
            const cart = res.data
            dispatch(addToCart(cart))
        },[])
    }
}

export const postCart = (cart) => {
    return (dispatch) => {
        axios.post('http://localhost:3000/cart',{
            cartData:cart
        })
        .then(res => {
        console.log(res);
        },[])
    }
}


