import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchJeans,fetchCart } from '../redux'
import '../App.css';
import { postCart } from '../redux';
// import {useSelector , useDispatch} from 'react-redux'

function JeansContainer({ jeansData, fetchJeans,postCart,fetchCart }) {
    // const cartItem = useSelector(state => state.addToCart)
    // const dispatch = useDispatch()  // HookReducer
    const jeansList = jeansData.jeans;
    useEffect(() => {
        fetchJeans()
        fetchCart()
        // console.log(jeansList);
    },[])
    return jeansData.loading ? (
        <h2>Loading....</h2>
    ) : jeansData.error ? (
        <h2>{jeansData.error}</h2>
    ) : (
            <div className="jeansList">
                {
                    jeansList.map(jeans => <div key={jeans.id} className="jeansItem">
                    <img src={jeans.img} height="350px" width="250px" alt=""></img>
                    {/* <h1>{jeans.id}</h1> */}
                    <p>${jeans.price}</p>
                    <button onClick={()=>postCart(jeans)} className="btn1">Add To Cart</button>
                </div>)
                    
                }
            </div>
        // </div>
    )
};

const mapStateToProps = state => {
    return {
        jeansData: state.jeans
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchCart: () => dispatch(fetchCart()),
        fetchJeans: () => dispatch(fetchJeans()),
        postCart: (jeans) =>dispatch(postCart(jeans))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JeansContainer)
