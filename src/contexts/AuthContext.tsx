import React, { useContext, useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom";


// type AuthContextProps = {
//   currentUser: any;
//   loading: any;
//   setLoading: any;
//   isLogged: Boolean;
//   login: () => void;
//   logout: () => void;
// }

const AuthContext = React.createContext<any | null>(null);

export const useAuth = () => {
  return useContext(AuthContext)
}

type AuthProviderProps = { 
  children: React.ReactNode 
}


export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(false)
  const [isLogged, setIsLogged] = useState(Boolean)
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const login = () => {
    setIsLogged(true)
    console.log(isLogged);
    navigate("/")
    return;
  }
  
  const logout = () => {
    setIsLogged(false)
    localStorage.clear();
    return;
  }

  useEffect(() => {
      const frontT = searchParams.get("frontToken")

      if (frontT) {
        console.log("set token ");
        localStorage.setItem('frontToken', frontT)
        // login()
      } else {
        console.log("no front token ");
      }
      
      if (localStorage.getItem('frontToken')) {
        setLoading(false)
        login()
      } else {
        logout()
      }

      if (frontT === "temporary fix") {
        setSearchParams("")
      }
    
    return;
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const value = {
    currentUser,
    setCurrentUser,
    login,
    logout,
    isLogged,
    setIsLogged
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
