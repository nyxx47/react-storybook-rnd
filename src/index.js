import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import configureStore from './store/configureStore'


import App from './pages/payment';
import Success from './pages/success';
import Error from './pages/error';
import Users from './pages/users'
import Emoney from './pages/emoney';

let store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} exact />
            <Route path="/emoney" component={Emoney} />
            <Route path="/success" component={Success} />
            <Route path="/error" component={Error} />
            <Route path="/users" component={Users} />
        </Router>
    </Provider>,
document.getElementById('app'));


