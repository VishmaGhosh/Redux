import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux'


function IceCreamContainer(props) {
    return (
        <div style={{color:"black",padding:"5px",backgroundColor:"lightpink"}}>
            <h1>IceCream Container</h1>
            <h2>Numbers of IceCream - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
