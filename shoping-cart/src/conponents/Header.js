import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CartContainer from './CartContainer';
import JeansContainer from './JeansContainer';
import TshirtContainer from './TshirtContainer'


function Header() {
    const cartItem = useSelector(state => state.cart.cartItem)
    return (
        <div className="header">
            <Router>
                <Link to=""><div>SHOPING-CART-<FontAwesomeIcon icon={faCartArrowDown} /></div></Link>
                <Link to="/CartContainer"><div className="cart-icon"><FontAwesomeIcon icon={faCartArrowDown} />{cartItem}</div></Link>


                <Route exact path="/" component={JeansContainer} />
                <Route exact path="/" component={TshirtContainer} />
                <Route path="/CartContainer" component={CartContainer} />
            </Router>
        </div>
    )
}

export default Header
