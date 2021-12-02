import React, { useState, useEffect } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Outlet, NavLink, useNavigate, Navigate, useLocation } from "react-router-dom"
import classes from './Dashboard.module.css'
import Tab from './Tab'
import IconFolder from '../Icons/Icons'

import ResizePanel from "react-resize-panel-ts";


const Dashboard = () => {
  const [error, setError] = useState("")
  const { currentUser, logout, isLogged } = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const defaultPath = "dashboard"

  async function handleLogout() {
    setError("ici")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  
  if (location.pathname.slice(-1) == "/") {
    location.pathname = location.pathname.slice(0, -1)
  }

  if (location.pathname.slice(- defaultPath.length) == defaultPath) {
    navigate("projects")
  }

  useEffect(() => {
    navigate("projects")
  }, [])

  return (
    <div className={classes.dashboard}>
      <section>
          {error && <div className="alert-danger">{error}</div>}
          <nav className={classes.tabs}>
            <ul>
              <li>
                <NavLink to='projects'>
                  <IconFolder fill="red" />
                  Projet
                </NavLink>
              </li>
              <li>
                <NavLink to='customize'>Custo</NavLink>
              </li>
            </ul>
          </nav>
      </section>
      <section className={classes.main}>

      </section>
      <section className={classes.toolbar}>
        <ResizePanel direction="w" handleClass={classes.customHandle}>
          <div className={classes.resizeContent}>
              <Outlet />
          </div>
        </ResizePanel>
      </section>
    </div>
  )
}

export default Dashboard