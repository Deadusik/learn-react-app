import React, { useState } from 'react'
import {
  BrowserRouter,
} from "react-router-dom"
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import { AuthContext } from './context'

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;