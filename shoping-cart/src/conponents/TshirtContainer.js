import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { fetchTshirt } from '../redux'
import '../App.css';
import { postCart } from '../redux';
// import {useSelector , useDispatch} from 'react-redux'



function TshirtContainer({ tshirtData, fetchTshirt,postCart }) {
    // const [tshirt, setTshirt] = useState([{}])
    const tshirt= tshirtData.tshirt;
    useEffect(() => {
        fetchTshirt()
        // console.log(tshirtData);
    },[])
    if(tshirt)
    return(
        <div style={{textAlign:'center'}}>
            <h3>T-Shirt</h3>
            <div className="jeansList">
            
            {
                tshirt.map((tshirt,t) => <div key={t} className="jeansItem">
                <img src={tshirt.img} height="350px" width="250px" alt=""></img>
                <p>${tshirt.price}</p>
                <button onClick={()=>postCart(tshirt)} className="btn1">Add To Cart</button>
            </div>)
            }
            </div>
        </div>
    )
            
}

const mapStateToProps = state => {
    return {
        tshirtData: state.tshirt
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchTshirt: () => dispatch(fetchTshirt()),
        postCart: tshirt=>dispatch(postCart(tshirt))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TshirtContainer)

