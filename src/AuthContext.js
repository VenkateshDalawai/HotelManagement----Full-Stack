// src/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser,email,setEmail,password,setPassword }}>
      {children}
    </AuthContext.Provider>
  );
};
