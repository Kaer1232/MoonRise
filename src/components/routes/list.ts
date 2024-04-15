import Home from '../pages/home/Home';
import Messages from '../pages/message/Messages';
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
      element: Messages,
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
      },
      {
        path: '/game',
        element: Home,
        auth: true,
      },
      {
        path: '/aith',
        element: Home,
        auth: false,
      },
]