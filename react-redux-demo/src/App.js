import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import CartContainer from './components/CartContainer';
// import UserContainer from './components/UserContainer';

function App() {
  return (
    <div style={{color:"lime",padding:"10px"}}>
      <Provider store={store}>
        <div className="App">
          <ItemContainer cake />
          <ItemContainer />
          <CakeContainer />
          <HooksCakeContainer />
          <IceCreamContainer />
          <NewCakeContainer />
          <CartContainer />
          {/* <UserContainer /> */}
        </div>
      </Provider>
    </div>
  );
}

export default App;
