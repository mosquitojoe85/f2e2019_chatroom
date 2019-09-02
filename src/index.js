import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from './routes/Index';

ReactDOM.render(
  <div className="appWrapper">
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={Index} />
      </Router>
    </div>
  </div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
