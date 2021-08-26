import React from 'react'
import {useSelector } from 'react-redux'
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { removeFromCart, fetchCart } from '../redux';


function CartContainer({cartItem,removeFromCart, fetchCart}) {
    const cart = cartItem;
    // console.log(cartItem);
    // const cartItem = useSelector(state => state.cart.cartList)
    useEffect(() => {
        fetchCart()
    },[])
    return (
        <div>
            <h1 style={{textAlign:'center',backgroundColor:"rgb(47, 236, 47);"}}>My-Cart</h1>
        <div style={{textAlign:'center'}} className="cartList">
            {
                cart.map((item)=><div className="cartItem">
                    <img src={item.cartData.img} width="150px" height="150px" alt=""></img>
                    {/* <p>{item.id}</p> */}
                    <p>${item.cartData.price}</p>
                    <button onClick={()=>removeFromCart(item.id)} className="btn1">Remove from Cart</button>
                </div>)
            }
        </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartItem: state.cart.cartList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCart: () => dispatch(fetchCart()),
        removeFromCart: id=>dispatch(removeFromCart(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)
