import React, { useState, useEffect } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom"
import classes from './Dashboard.module.css'
import { IconFolder, IconCustom, IconUpload } from '../Icons/Icons'
import { getJsonTest } from '../../api/index'

import ResizePanel from "react-resize-panel-ts";
import { Button, message } from 'antd';

const key = 'updatable';

// const openMessage = () => {
//   message.loading({ content: 'Loading...', key });
//   setTimeout(() => {
//     message.success({ content: 'Loaded!', key, duration: 2 });
//   }, 1000);
// };

const Dashboard = () => {
  const [error, setError] = useState("")
  const [jsonTest, setJsonTest] = useState("Fetching")
  const { logout } = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const defaultPath = "dashboard"

  const fetchPages = async () => {
    setJsonTest("load");
    message.loading({ content: 'Loading...', key });
    const jsondata = await getJsonTest()
    message.success({ content: 'Loaded!', key, duration: 2 });
    console.log("ici ",jsondata);
    
    // setJsonTest(jsondata);
    setJsonTest(jsondata[13]);
  };

  async function handleLogout() {
    setError("ici")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  // console.log(jsonTest);
  
  
  if (location.pathname.slice(-1) === "/") {
    location.pathname = location.pathname.slice(0, -1)
  }

  if (location.pathname.slice(- defaultPath.length) === defaultPath) {
    navigate("projects")
  }

  useEffect(() => {
    navigate("projects")
    fetchPages()
  }, [])

  return (
    <div className={classes.dashboard}>
      <section>
          {error && <div className="alert-danger">{error}</div>}
          <nav className={classes.tabs}>
            <div></div>
            <ul>
              <li>
                <NavLink to='projects'>
                  <IconFolder colorType="fill" />
                </NavLink>
              </li>
              <li>
                <NavLink to='customize'>
                  <IconCustom colorType="fill" />
                </NavLink>
              </li>
              <li>
                <NavLink to='upload'>
                  <IconUpload colorType="stroke" />
                </NavLink>
              </li>
            </ul>
            <Button onClick={handleLogout}>
              Deconect
            </Button>
          </nav>
      </section>
      <section className={classes.main}>
        <div className={classes.content}>
          <Button type="primary" onClick={fetchPages}>
            Reload
          </Button>
          <span>{jsonTest}</span>
        </div>
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