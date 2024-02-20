import { createContext, useContext, useState } from "react";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword,  signOut
} from "firebase/auth";
import { auth } from '../firebase/config';
  
  const authContext = createContext();
  
   export const useAuth = () => {
     const context = useContext(authContext);
     if (!context) throw new Error("There is no Auth provider");
     return context;
   };

   // eslint-disable-next-line react/prop-types
   export function AuthProvider({ children }) {
    const [user] = useState(null);
    const [loading] = useState(true);
  
    const signup = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => signOut(auth);


    return (
        <authContext.Provider
          value={{
            signup,
            login,
            user,
            logout,
            loading,
          }}
        >
          {children}
        </authContext.Provider>
      );
    }
    
  

//   const login = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

  