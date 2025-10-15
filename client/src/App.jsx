import React from 'react'
import Home from './pages/Home'
import { AppContextProvider } from './context/AppContext'

const App = () => {
  return (
    <AppContextProvider>
      <div>
      <Home/>
    </div>
    </AppContextProvider>
    
  )
}

export default App