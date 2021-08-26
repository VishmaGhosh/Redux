import React from 'react'
import {connect} from 'react-redux'


function CartContainer(props) {
    return (
        <div style={{color:"black",padding:"5px",backgroundColor:"limegreen"}}>
            <h1>Cart Container</h1>
            <h2>Numbers of item on Cart - {props.totalItem}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cakeCart: state.cake.cakeCart,
        iceCreamCart: state.iceCream.iceCreamCart,
        totalItem: state.cake.cakeCart+state.iceCream.iceCreamCart
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         buyCake: () => dispatch(buyCake())
//     }
// }

export default connect(mapStateToProps)(CartContainer)
