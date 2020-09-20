import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'

import { StateContext, StateProvider as SProvider } from './StateProvider'
import reducer, { initState } from './reducer'

ReactDOM.render(
  <SProvider initState={ initState } reducer={ reducer }>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </SProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
