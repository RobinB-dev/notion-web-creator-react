import React from 'react';
import { AuthProvider } from "../../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import '../../styles/reset.css';
import '../../styles/style.css';
import '../../styles/variables.css';
import PrivateRoute from "../PrivateRoute"
import Dashboard from '../Dashboard/Dashboard'
import Login from '../Login/Login'
import Header from '../Header/Header'
import Homepage from '../Homepage/Homepage'
import Tab from '../Dashboard/Tab'


const App = () => {
  return (
    <div className="App">
        <Router>
          <AuthProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path='/dashboard' element={<PrivateRoute/>}>
                <Route path='/dashboard' element={<Dashboard/>}>
                  {/* <Route path="/" element={<Navigate replace to="/projects" />} /> */}
                  <Route path=':tabType' element={<Tab/>}/>
                </Route>
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
