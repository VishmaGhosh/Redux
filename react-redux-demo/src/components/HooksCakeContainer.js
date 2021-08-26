import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {buyCake} from '../redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div style={{color:"red",padding:"5px",backgroundColor:"lightblue"}}>
            <h1>Hooks Cake Container</h1>
            <h2>Num Of cakes - {numOfCakes}</h2>
            <button onClick={()=> dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
