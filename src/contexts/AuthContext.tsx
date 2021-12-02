import React, { useContext, useState, useEffect } from "react"


const AuthContext = React.createContext<any | null>(null);

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(false)
  const [isLogged, setIsLogged] = useState(Boolean)

  const login = () => {
    // return auth.signInWithEmailAndPassword(email, password)
    setIsLogged(true)
    console.log(isLogged);
    // return console.log("login any");
  }
  
  const logout = () => {
    setIsLogged(false)
    return console.log("logout any");
  }

  useEffect(() => {
    // const unsubscribe = auth.onAuthStateChanged(user => {
      // setCurrentUser(currentUser)
      // setCurrentUser(user)
      // setLoading(false)
      setIsLogged(false)
    // })
    console.log("useEffectAuthContext");
    
    // return console.log("unsubscribe any");
  }, [])

  const value = {
    currentUser,
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
