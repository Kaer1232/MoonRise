import Home from '../pages/home/Home';
export const routi =
[
    {
      path: '/',
    element: Home,
    auth: true,  
    },
    {
        path: '/profile/:id',
      element: Home,
      auth: true,  
      },
      {
        path: '/messages/:id',
      element: Home,
      auth: true,  
      },
      {
        path: '/friends/:id',
      element: Home,
      auth: true,  
      },
      {
        path: '/auth',
      element: Home,
      auth: false,  
      }
]