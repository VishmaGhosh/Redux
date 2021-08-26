import React, {useState} from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'


function NewCakeContainer(props) {
    const [number, setNumber] = useState(0)
    return (
        <div style={{color:"red",padding:"5px",backgroundColor:"palegreen"}}>
            <h2>Numbers of Cakes - {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={ e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy{number}Cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
