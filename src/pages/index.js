import React from 'react'
import { useRoutes } from 'hookrouter';
import routes from './routes.js'
import NotFound from './404'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

  import Payment from './payment';
  import Success from './success';
  import Error from './error';
  import Emoney from './emoney';

const App = () => (
    <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Payment {...props} />} />
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/emoney">
            <Emoney />
          </Route>
        </Switch>
    </Router>
)

export default App

