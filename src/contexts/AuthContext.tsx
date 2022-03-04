import React, { useContext, useState, useEffect, createContext } from "react"
import { useSearchParams, useNavigate } from "react-router-dom";
import { testObj } from "../decl";
import useDataApi from "../hooks/useDataApi";


type AuthContextProps = {
  currentUser: any;
  isLogged: Boolean;
  login: () => void;
  logout: () => any;
}

const defaultState = {
  currentUser: "",
  isLoading: true,
  isLogged: false,
  login: () => { },
  logout: () => { },
};

const AuthContext = createContext<AuthContextProps>(defaultState);

export const useAuth = () => {
  return useContext(AuthContext)
}

type AuthProviderProps = {
  children: React.ReactNode
}


export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState(defaultState.currentUser)
  const [loading, setLoading] = useState(defaultState.isLoading)
  const [isLogged, setIsLogged] = useState(defaultState.isLogged)
  const url = `${process.env.REACT_APP_BASE_URL_API}/user_data?user_id=d8cb62ed-2973-45c1-8f3e-d7ccc9f0f1d1`
  const [{ data, isLoading },] = useDataApi(url, {},);
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const login = () => {
    setIsLogged(true)
    // console.log(isLogged);
    navigate("/dashboard/projects") // may posibliy be deleted
    return;
  }

  const logout = () => {
    setIsLogged(false)
    localStorage.clear();
    navigate("/")
    return;
  }

  useEffect(() => {
    const userFullName = testObj(data, "name")
    if (userFullName) {
      const firstName = userFullName.replace(/ .*/, '');
      setCurrentUser(firstName)
    }
  }, [data])

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
      setLoading(true)
      login()
    } else {
      setLoading(false)
      // login()
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
      {(!isLoading && !loading) && children}
    </AuthContext.Provider>
  )
}


export default AuthContext