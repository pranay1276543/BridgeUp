import React from 'react'
import Home from './pages/Home'
import { AppContextProvider } from './context/AppContext'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Features from './pages/Features';
import Working from './pages/Working';
import Register_login from './pages/Register_login';
import Register from './pages/Register';

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/features',
      element:<Features/>
    },
    {
    path:'/working',
    element:<Working/>
    },
    {
      path:'/register-login',
      element:<Register_login/>
    },
    {
      path:'/register',
      element:<Register/>
    }
  ])
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
    
  )
}

export default App