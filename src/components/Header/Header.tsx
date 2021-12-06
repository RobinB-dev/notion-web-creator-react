import React, { useState, useEffect } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import classes from "./Header.module.css"
import logo_app from "../../assets/images/selferLogo.svg"

const Header = () => {
  const [error, setError] = useState("")
  const { isLogged, logout } = useAuth()
  const navigate = useNavigate();

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  useEffect(() => {
    // console.log("change is log");
  }, [isLogged])

  return (
    <header className={classes.header}>
      {error && <div className="danger">{error}</div>}
        <Link to="/">
            <img src={logo_app} alt="" />
        </Link>
        {!isLogged &&
        <a className={classes.loginLink} href={`${process.env.REACT_APP_BASE_URL}/oauth`}><span className={classes.accentColor}>Start with </span>Notion</a>
        }
        {isLogged && 
        <div><Link to="/dashboard">Dashboard</Link>
        <button className="button-link" onClick={handleLogout}>Log Out</button>
        </div>}
    </header>
  )
}

export default Header