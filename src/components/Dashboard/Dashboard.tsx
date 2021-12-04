import React, { useState, useEffect } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Outlet, NavLink, useNavigate, useLocation, useParams, Link } from "react-router-dom"
import classes from './Dashboard.module.css'
import { IconFolder, IconCustom, IconUpload, IconLogout, IconRefresh } from '../Icons/Icons'
import { ProjectsMain, ProjectsToolBar} from './Projects'
import { CustomizeMain, CustomizeToolBar} from './Customize'
import ResizePanel from "react-resize-panel-ts";
import logo_app from "../../assets/images/logo_app_r.svg"

import { getJsonTest } from '../../api/index'
import { message } from 'antd';
import { ColorText } from "../Blocks/Headings"

export const Dashboard = () => {
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const defaultPath = "dashboard"
  let params = useParams();

  async function handleLogout() {
    setError("ici")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  useEffect(() => {
    navigate("projects")
  }, [])
  
  // console.log({params.tabType});
  
  // if (location.pathname.slice(-1) === "/") {
  //   location.pathname = location.pathname.slice(0, -1)
  // }

  // if (location.pathname.slice(- defaultPath.length) === defaultPath) {
  //   navigate("projects")
  // }

  return (
    <div className={classes.dashboard}>
      <section>
          {error && <div className="alert-danger">{error}</div>}
          <nav className={classes.tabs}>
          <Link to="/">
              <img src={logo_app} alt="" />
          </Link>
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
            <button onClick={handleLogout}>
              <IconLogout colorType="fill" />
            </button>
          </nav>
      </section>
      <Outlet />
    </div>
  )
}


export const Tab = () => {
  const [jsonTest, setJsonTest] = useState("Fetching")
  const navigate = useNavigate();
  const { tabType } = useParams();
  const key = 'updatable';

  const fetchPages = async () => {
    setJsonTest("load");
    message.loading({ content: 'Loading...', key });
    const jsondata = await getJsonTest()
    message.success({ content: 'Loaded!', key, duration: 2 });
    console.log("ici ",jsondata);
    
    // setJsonTest(jsondata);
    setJsonTest(jsondata[13]);
  };


  return (
    <>
      <section className={classes.main}>
            <header>
              <button>My cool site</button>
              <p>Welcome back&nbsp;<ColorText>User</ColorText></p>
              <button onClick={fetchPages}>
                <IconRefresh colorType={"fill"} />
                <span>Reload</span>
              </button>
            </header>
            <div className={classes.content}>
              {tabType === "projects" && <ProjectsMain />}
              {tabType === "customize" && <CustomizeMain />}
              {/* {tabType === "upload" && <ProjectsMain />} */}
          </div>
      </section>
      <section className={classes.toolbar}>
          <ResizePanel direction="w" handleClass={classes.customHandle}>
              <div className={classes.resizeContent}>
                {tabType === "projects" && <ProjectsToolBar />}
                {tabType === "customize" && <CustomizeToolBar />}
              </div>
          </ResizePanel>
      </section>
    </>
  )
}