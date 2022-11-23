import React from 'react'
import Error from '../components/pages/Error'
import About from '../components/pages/About'
import Posts from '../components/pages/Posts'
import PostFull from '../components/PostFull'
import Login from '../components/pages/Login'

export const publicRoutes = [
  {
    path: '/',
    element: <About />,
    error: <Error />
  },
  {
    path: 'login',
    element: <Login />,
    error: <Error />
  }
];

export const privateRoutes = [
  {
    path: '/',
    element: <About />,
    error: <Error />
  },
  {
    path: 'posts',
    element: <Posts />,
    error: <Error />
  },
  {
    path: 'posts/:id',
    element: <PostFull />,
    error: <Error />
  }
];

