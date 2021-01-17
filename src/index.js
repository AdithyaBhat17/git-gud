import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import Followers from "./components/Followers";
import User from "./components/User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Repositories from "./components/Repositories";
import Following from "./components/Following";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/user/:username" component={User} />
        <Route exact path="/user/:username/followers" component={Followers} />
        <Route exact path="/user/:username/repos" component={Repositories} />
        <Route exact path="/user/:username/following" component={Following} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
