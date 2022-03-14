import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="row">
              <div>
                  <a className="brand" href="/">amazona</a>
              </div>
              <div>
                  <a href="/cart">Cart</a>
                  <a href="/signin">Sign In</a>
              </div>
          </header>  
          <main>
          <Routes>
            <Route path="/product/:id" element={<ProductScreen/>} exact></Route>
            <Route path="/"  element={<HomeScreen/>} exact></Route>
          </Routes>
          </main>
          <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

