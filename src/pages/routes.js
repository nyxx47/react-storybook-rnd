import React from "react";

import App from './payment';
import Success from './success';
import Error from './error';
import Emoney from './emoney';

const routes = {
    "/": () => <App/>,
    "/emoney": () => <Emoney/>,
    "/success": () => <Success/>,
    "/error": () => <Error/>
};

            
export default routes;
