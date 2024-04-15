import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { routi } from './list';
import Layout from '../layout/layout';

const Routess: React.FC = () => {
  const isAuth = true;
  return (
    <Router>
      <Routes>
        {routi.map((routi) => {
          if (routi.auth && !isAuth)  
            return false;
          return (
            <Route
              path={routi.path}
              key={`route ${routi.path}`}
            >
              <Layout/>
              <routi.element />
            </Route>
          )
        })}
      </Routes>
    </Router>
  )
}

export default Routess;