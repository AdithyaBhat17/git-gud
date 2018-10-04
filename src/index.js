import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Search from './components/Search';
import Followers from './components/Followers';
import User from './components/User';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Repositories from './components/Repositories';
import Following from './components/Following';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search} />
            <Route path="user/:username" component={User}>
                <Route path="followers" component={Followers} />
                <Route path="repos" component={Repositories} />
                <Route path="following" component={Following} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
