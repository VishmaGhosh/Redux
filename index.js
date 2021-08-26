const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = "BUY_ICECREAM"


function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIceCream(){
    return{
        type:BUY_ICECREAM,
        info: 'Second redux action'
    }
}

// (prevState, action) => newState

const initialCakeState = {
    numOfCake: 10,
}
const initialIcecreamState ={
    numOfIceCream : 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return{
                ...state,
                numOfCake : state.numOfCake - 1
            }
        default: return state    
    }
}
const iceCreamReducer = (state = initialIcecreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCream : state.numOfIceCream - 1
            }
        default: return state    
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))
console.log("Initial sate" ,store.getState());
const unsubscribe = store.subscribe(()=> {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()