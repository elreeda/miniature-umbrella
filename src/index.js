import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AlertDialog from './AlertDialog';
import Checkbox from './Checkbox'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ul>
        <li>
          <Link to='/'>react-alert-dialog</Link>
        </li>
        <li>
          <Link to='/react-checkbox'>react-checkbox</Link>
        </li>
        <li>
          <Link to='/react-progress-bar'>react-progress-bar</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path='/' component={AlertDialog} />
        <Route exact path='/react-checkbox' component={Checkbox} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
