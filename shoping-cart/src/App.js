
import { Provider } from 'react-redux'
import './App.css';
// import CartContainer from './conponents/CartContainer';
import Header from './conponents/Header';
// import JeansContainer from './conponents/JeansContainer';
import store from './redux/store'
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'



function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <div>
        <Header />
      </div>
    </Provider>
    </div>
  );
}

export default App;
