import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'


function CakeContainer(props) {
    return (
        <div style={{color:"black",padding:"5px",backgroundColor:"lightgreen"}}>
            <h1>Cake Container</h1>
            <h2>Numbers of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
