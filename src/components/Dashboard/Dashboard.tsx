import React, { useState, useEffect, useContext } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Outlet, NavLink, useNavigate, useParams, Link, useLocation, matchPath } from "react-router-dom"
import styles from './Dashboard.module.css'
import { IconFolder, IconCustom, IconUpload, IconLogout, IconRefresh } from '../Icons/Icons'
import { ProjectsMain, ProjectsToolBar } from './Projects'
import { CustomizeMain, CustomizeToolBar } from './Customize'
import { UploadMain, UploadToolBar } from './Upload'
import ResizePanel from "react-resize-panel-ts";
import Tooltip from "../Blocks/Tooltip"
import logo_app from "../../assets/images/logo_app_r.svg"
import DataContext from '../../contexts/DataContext'
import AuthContext from '../../contexts/AuthContext'

import 'antd/lib/message/style/index.css'
import { ColorText } from "../Blocks/Headings"
import { Overlay, InfoModal } from "./Overlay/Overlay"

export const Dashboard = () => {
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const dataCtx = useContext(DataContext);
  const navigate = useNavigate();

  // const location = useLocation();
  // const defaultPath = "dashboard"
  // let params = useParams();

  // this function is called when the user clicks on the logo
  async function handleLogout() {
    try {
      dataCtx.setIsLoading((prevState: any) => ({
        ...prevState,
        auth: true
      }))
      await logout()
      navigate("/home")
    } catch {
      setError("Failed to log out")
    }
    dataCtx.setIsLoading((prevState: any) => ({
      ...prevState,
      auth: false
    }))
  }

  // redirect to cutomize for the time of developement
  useEffect(() => {
    navigate("/customize")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
  }, [dataCtx.overlayActive])

  // console.log({params.tabType});
  // if (location.pathname.slice(-1) === "/") {
  //   location.pathname = location.pathname.slice(0, -1)
  // }
  // if (location.pathname.slice(- defaultPath.length) === defaultPath) {
  //   navigate("projects")
  // }


  return (
    <div className={styles.dashboard}>
      <InfoModal emoji={"????"}>Work in progress.</InfoModal>
      {dataCtx.overlayActive && <Overlay />}
      <section>
        {error && <div className="alert-danger">{error}</div>}
        <nav className={styles.tabs}>
          <Link to="/">
            <img src={logo_app} className={styles.logoApp} alt="Logo Selfer" />
          </Link>
          <ul>
            <li>
              <Tooltip content="projects" position="right">
                <NavLink to='projects'>
                  <IconFolder colorType="fill" />
                </NavLink>
              </Tooltip>
            </li>
            <li>
              <Tooltip content="customize" position="right">
                <NavLink to='customize'>
                  <IconCustom colorType="fill" />
                </NavLink>
              </Tooltip>
            </li>
            <li>
              <Tooltip content="upload" position="right">
                <NavLink to='upload'>
                  <IconUpload colorType="stroke" />
                </NavLink>
              </Tooltip>
            </li>
          </ul>
          <Tooltip content="logout" position="right">
            <button onClick={handleLogout}>
              <IconLogout colorType="fill" />
            </button>
          </Tooltip>
        </nav>
      </section>
      <Outlet />
    </div>
  )
}


export const Tab = () => {
  const { tabType } = useParams();
  const dataCtx = useContext(DataContext);
  const authCtx = useContext(AuthContext);
  const { pathname } = useLocation();

  // determine which tab is active when refreshing
  const handleRefresh = () => {
    if (matchPath("dashboard/projects", pathname)) {
      dataCtx.setIsLoading((prevState: any) => ({
        ...prevState,
        projects: true
      }))
    } else if (matchPath("dashboard/customize", pathname)) {
      dataCtx.setIsLoading((prevState: any) => ({
        ...prevState,
        customize: true
      }))
    } else {
      console.log("other");
    }
  }

  const onClick = () => {
    console.log(dataCtx.styleStore);

  }

  return (
    <>
      <section className={styles.main}>
        <div className={styles.mainChild}>
          <header>
            <button onClick={onClick}>My cool site</button>
            <p>Welcome back&nbsp;<ColorText>{authCtx.currentUser}</ColorText></p>
            <button onClick={handleRefresh}>
              <IconRefresh colorType={"fill"} />
              {dataCtx.isLoading.api ? <span>Is loading</span> : <span>Refresh</span>}
            </button>
          </header>
          <div className={styles.content}>
            {tabType === "projects" && <ProjectsMain />}
            {tabType === "customize" && <CustomizeMain />}
            {tabType === "upload" && <UploadMain />}
          </div>
        </div>
      </section>
      <section className={styles.toolbar}>
        <ResizePanel direction="w" handleClass={styles.customHandle}>
          <div className={styles.resizeContent}>
            {tabType === "projects" && <ProjectsToolBar />}
            {tabType === "customize" && <CustomizeToolBar />}
            {tabType === "upload" && <UploadToolBar />}
          </div>
        </ResizePanel>
      </section>
    </>
  )
}
