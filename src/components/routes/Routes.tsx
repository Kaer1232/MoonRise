import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routi } from './list';

const Routess: React.FC = () => {
  const isAuth = true;
  return (
    <Routes>
      {routi.map((routi) => {
        if (routi.auth && !isAuth)  
          return false;
        return (
          <Route
            path={routi.path}
            key={`route ${routi.path}`}
            element={<routi.element />}
          />
        )
      })}
    </Routes>
  );
};

export default Routess;