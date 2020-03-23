import React from 'react'
import { useRoutes } from 'hookrouter';
import routes from './routes.js'
import NotFound from './404'

const App = () => {
    const route = useRoutes(routes)
    return route || <NotFound/>
}

export default App