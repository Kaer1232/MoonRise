import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routi } from './list';
import { useAuth } from '../providers/useAuth';

const Routess: React.FC = () => {
  const {user} = useAuth()
  return (
    <Routes>
      {routi.map((routi) => {
        if (routi.auth && !user)  
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