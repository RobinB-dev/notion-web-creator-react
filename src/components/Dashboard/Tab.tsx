import React, { useState } from "react"
import { useParams } from "react-router-dom";
import classes from './Tab.module.css'


const Tab = () => {
  const [error, setError] = useState("")
  const { tabType } = useParams();

  return (
    <div>
      <h1>{tabType}</h1>
    </div>
  )
}

export default Tab
