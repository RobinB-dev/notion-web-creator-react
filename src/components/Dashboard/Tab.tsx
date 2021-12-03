import React from "react"
import { useParams } from "react-router-dom";
import classes from './Tab.module.css'


const Tab = () => {
  const { tabType } = useParams();

  return (
    <div>
      <h1 className={classes.tab}>{tabType}</h1>
    </div>
  )
}

export default Tab
