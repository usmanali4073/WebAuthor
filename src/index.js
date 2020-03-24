import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./app";
import "./bootstrap.min.css";
import Account from "./AccountInfo/Account";

import { BrowserRouter, Route } from "react-router-dom";
import Add from "./AccountInfo/Add";


ReactDOM.render(
  <BrowserRouter>
  <React.Fragment>
    <Route exact path="/" component={App} />
    <Route path="/add" component={Add}/>
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/account" component={Account} />
  </BrowserRouter>,
  document.getElementById("root-form")
);

// ReactDOM.render(<Info/>, document.getElementById('root'))
// ReactDOM.render(<Account/>, document.getElementById('root'));
// ReactDOM.render(<DomEvents />, document.getElementById('domEvent') )
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
