import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducers';



// const store = createStore(jeansReducers)
const store = createStore(rootReducer, (applyMiddleware( thunk)))


export default store