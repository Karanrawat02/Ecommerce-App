import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './Pages/cart/Cart';
import Home from './Pages/home/Home';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {
  return (
    <div className="App">
      
      <Provider store={store}>
        <BrowserRouter>
        <Navbar/>
         <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
        </Provider>
      </div>
  );
}

export default App;
