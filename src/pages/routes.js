import React from "react";

import App from './payment';
import Success from './success';
import Error from './error';
import Emoney from './emoney';

const routes = {
    "/merchant/:m/code/:c/date/:d/amount/:a": ({m, c, d, a}) => <App data={{merchant: m, code: c, date: d, amount: a}}/>,
    "/emoney": () => <Emoney/>,
    "/success": () => <Success/>,
    "/error": () => <Error/>
};

            
export default routes;
