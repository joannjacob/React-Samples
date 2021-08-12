import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';







/* export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/assets" component={Asset} />
      <Route component={App} />
    </Switch>
  );
} */



ReactDOM.render(<App />, document.getElementById('root'));
/* ReactDOM.render(<Asset />, document.getElementById('root')); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

