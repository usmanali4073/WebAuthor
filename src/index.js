import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Account from './Account/Account'
import DomEvents from './DOMEvents/DomEvents';


ReactDOM.render(<Account/>, document.getElementById('root'));
ReactDOM.render(<DomEvents />, document.getElementById('domEvent') )
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
