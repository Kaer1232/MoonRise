import Auth from '../pages/auth/auth';
import Friends from '../pages/friends/Friends';
import Home from '../pages/home/Home';
import Messages from '../pages/message/Messages';
import Profile from '../pages/profile/profile';
export const routi =
[
    {
      path: '/',
    element: Home,
    auth: true,  
    },
    {
        path: '/profile',
      element: Profile,
      auth: true,  
      },
      {
        path: '/messages',
      element: Messages,
      auth: true,  
      },
      {
        path: '/friends',
      element: Friends,
      auth: true,  
      },
      {
        path: '/auth',
      element: Auth,
      auth: false,  
      },
      {
        path: '/game',
        element: Home,
        auth: true,
      },
]