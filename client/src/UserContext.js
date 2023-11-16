import React, { createContext, useState } from 'react';

export const UserContext = createContext(); // Create the UserContext

export function UserContextProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null); // Initialize state
  const [userInfo, setUserInfo] = useState(null);
  // Your other context logic here

  const contextValue = {
    loggedInUser,
    setLoggedInUser,
    userInfo,
    setUserInfo,
    // ... other values and functions you want to provide
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}

