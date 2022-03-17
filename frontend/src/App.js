import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="row">
              <div>
                  <Link className="brand" to="/">amazona</Link>
              </div>
          </header>  
          <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen/>} exact></Route>
            <Route path="/"  element={<HomeScreen/>} exact></Route>
          </Routes>
          </main>
          <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

