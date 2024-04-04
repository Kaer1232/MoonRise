import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { routes } from './list';

const Routess: React.FC = () => {
  const isAuth = true;
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          if (route.auth && !isAuth)
            return false;
          return (
            <Route
              path={route.path}
              key={`route ${route.path}`}
            >
              <route.element />
            </Route>
          )
        })}
      </Routes>
    </Router>
  )
}

export default Routess;