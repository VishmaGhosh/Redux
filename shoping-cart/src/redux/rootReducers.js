import { combineReducers } from "redux";
import cartReducers from "./cart/cartReducers";
import jeansReducers from "./jeans/jeansReducers";
import tshirtReducers from "./tshirt/tshirtReducers";




const rootReducer = combineReducers({
    cart: cartReducers,
    jeans: jeansReducers,
    tshirt: tshirtReducers
})

export default rootReducer