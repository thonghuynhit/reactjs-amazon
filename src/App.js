import React, { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import Header from './Header'
import Home from './Home'

function App() {


  return (
    <div>
      <Switch>
        <Route path="/checkout">
          <Header />  
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/" exact>
          <Header />
          <Home />

        </Route>
      </Switch>
    </div>
  );
}

export default App;
