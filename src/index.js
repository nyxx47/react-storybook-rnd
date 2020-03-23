import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from 'hookrouter';
import { Provider } from "react-redux";
import configureStore from './store/configureStore'
import routes from './pages/routes.js'
import NotFound from './pages/404'


let store = configureStore()

const App = () => {
    const route = useRoutes(routes)
    return route || <NotFound/>
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
document.getElementById('app'));


