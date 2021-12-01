import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Notionlogo from "../../assets/images/Notion_app_logo.png"
import classes from "./Login.module.css"

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  // async function handleSubmit(e: any) {
  //   e.preventDefault()

  //   try {
  //     setError("")
  //     setLoading(true)
  //     // await login(emailRef.current.value, passwordRef.current.value)
  //     await console.log('await any');
  //     navigate("/")
  //   } catch {
  //     setError("Failed to log in")
  //   }

  //   setLoading(false)
  // }

  function handleClick(e: any) {
    e.preventDefault();
    login()
    navigate("/dashboard")
  }

  return (
    <>
    <section>
      <h1>Connexion</h1>
        {error && <div className="danger">{error}</div>}
        <div className={classes.login}>
          <div>
            <a href="" onClick={handleClick}>
              <img src={Notionlogo} alt="" />
            </a>
          </div>
          <div>
            <a href="" onClick={handleClick}>
              <div className={classes.loginText}>Se connecter avec Notion</div>
            </a>
          </div>
          <div>
              <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>
    </section>
    </>
  )
}

export default Login