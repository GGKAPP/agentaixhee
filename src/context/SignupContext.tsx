import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SignupContextType {
  isSignupOpen: boolean;
  openSignup: () => void;
  closeSignup: () => void;
}

const SignupContext = createContext<SignupContextType | undefined>(undefined);

export const useSignup = () => {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error('useSignup must be used within a SignupProvider');
  }
  return context;
};

interface SignupProviderProps {
  children: ReactNode;
}

export const SignupProvider: React.FC<SignupProviderProps> = ({ children }) => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openSignup = () => setIsSignupOpen(true);
  const closeSignup = () => setIsSignupOpen(false);

  return (
    <SignupContext.Provider value={{ isSignupOpen, openSignup, closeSignup }}>
      {children}
    </SignupContext.Provider>
  );
};