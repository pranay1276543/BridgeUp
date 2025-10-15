import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context
// It holds the state (isNeedingMentor) and the function to update it (setIsNeedingMentor)
export const AppContext = createContext(null);

/**
 * 2. Create the Provider Component
 * This component wraps the part of the app that needs access to the context.
 */
export const AppContextProvider = ({ children }) => {
  // State for tracking the user's role selection in the header (True for 'I need a mentor')
  const [isNeedingMentor, setIsNeedingMentor] = useState(true);

  // The value object contains all the state and functions we want to expose
  const contextValue = {
    isNeedingMentor,
    setIsNeedingMentor,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
