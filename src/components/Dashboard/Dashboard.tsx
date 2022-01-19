import React, { useState, useEffect, useContext } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Outlet, NavLink, useNavigate, useParams, Link, useLocation, matchPath } from "react-router-dom"
import classes from './Dashboard.module.css'
import { IconFolder, IconCustom, IconUpload, IconLogout, IconRefresh } from '../Icons/Icons'
import { ProjectsMain, ProjectsToolBar } from './Projects'
import { CustomizeMain, CustomizeToolBar } from './Customize'
import { UploadMain, UploadToolBar } from './Upload'
import ResizePanel from "react-resize-panel-ts";
import Tooltip from "../Blocks/Tooltip"
import logo_app from "../../assets/images/logo_app_r.svg"
import DataContext from '../../contexts/DataContext'
import AuthContext from '../../contexts/AuthContext'
import useDataApi from '../../hooks/useDataApi'

import 'antd/lib/message/style/index.css'
import { ColorText } from "../Blocks/Headings"
import Overlay from "./ToolBar/Overlay"

export const Dashboard = () => {
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const dataCtx = useContext(DataContext);
  const navigate = useNavigate();

  // const location = useLocation();
  // const defaultPath = "dashboard"
  // let params = useParams();


  async function handleLogout() {
    setError("ici")

    try {
      dataCtx.setIsLoading((prevState: any) => ({
        ...prevState,
        auth: true
      }))
      await logout()
      navigate("/")
    } catch {
      setError("Failed to log out")
    }
    dataCtx.setIsLoading((prevState: any) => ({
      ...prevState,
      auth: false
    }))

  }

  useEffect(() => {
    navigate("/dashboard/customize")
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
    <div className={classes.dashboard}>
      {dataCtx.overlayActive && <Overlay />}
      <section>
        {error && <div className="alert-danger">{error}</div>}
        <nav className={classes.tabs}>
          <Link to="/">
            <img src={logo_app} className={classes.logoApp} alt="Logo Selfer" />
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
  const [reloadPage, setReloadPage] = useState("customize")
  const { pathname } = useLocation();

  const url = `${process.env.REACT_APP_BASE_URL}/notion_data?code=c7cc8faa-366c-4c3d-a77d-1a18ed0cac5f`
  const [{ data, isLoading }, doFetch] = useDataApi(url, { hits: [] },);
  // const [{ data, isLoading, isError }, doFetch] = useDataApi(url, { hits: [] },);


  useEffect(() => {
    console.log("data : ", data[0]);
  }, [data])

  useEffect(() => {
    !isLoading && dataCtx.setNotionData(data[0])
    // console.log(reloadPage, "x ", isLoading);

    if (reloadPage !== "") {
      dataCtx.setIsLoading((prevState: any) => ({
        ...prevState,
        [reloadPage]: isLoading
      }))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, reloadPage])


  const handleRefresh = () => {
    if (matchPath("dashboard/projects", pathname)) {
      doFetch(`${process.env.REACT_APP_BASE_URL}/user_data?user_id=d8cb62ed-2973-45c1-8f3e-d7ccc9f0f1d1`)
    } else if (matchPath("dashboard/customize", pathname)) {
      setReloadPage("customize")
      doFetch(`${process.env.REACT_APP_BASE_URL}/notion_data?code=c7cc8faa-366c-4c3d-a77d-1a18ed0cac5f`)
    } else {
      console.log("dommage");
    }
    // dataCtx.setNotionData(data)
  }



  return (
    <>
      <section className={classes.main}>
        <div className={classes.mainChild}>
          <header>
            <button>My cool site</button>
            <p>Welcome back&nbsp;<ColorText>{authCtx.currentUser}</ColorText></p>
            <button onClick={handleRefresh}>
              <IconRefresh colorType={"fill"} />
              <span>Reload</span>
            </button>
          </header>
          <div className={classes.content}>
            {tabType === "projects" && <ProjectsMain />}
            {tabType === "customize" && <CustomizeMain />}
            {tabType === "upload" && <UploadMain />}
          </div>
        </div>
      </section>
      <section className={classes.toolbar}>
        <ResizePanel direction="w" handleClass={classes.customHandle}>
          <div className={classes.resizeContent}>
            {tabType === "projects" && <ProjectsToolBar />}
            {tabType === "customize" && <CustomizeToolBar />}
            {tabType === "upload" && <UploadToolBar />}
          </div>
        </ResizePanel>
      </section>
    </>
  )
}
