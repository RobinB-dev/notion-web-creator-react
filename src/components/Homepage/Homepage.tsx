import React from "react"
import { Link } from "react-router-dom"
import classes from "./Homepage.module.css"
import Notionlogo from "../../assets/images/Notion_app_logo.png"

const Homepage = () => {

  return (
    <>
      <section className={classes.home}>
        <h1>Homepage</h1>
          <div className={classes.login}>
            <div>
              <a href={`${process.env.REACT_APP_BASE_URL}/oauth`} >
                <img src={Notionlogo} alt="" />
              </a>
            </div>
          </div>
      </section>
    </>
  )
}

export default Homepage
