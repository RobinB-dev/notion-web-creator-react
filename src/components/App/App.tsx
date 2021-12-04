import React from 'react';
import { AuthProvider } from "../../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import '../../styles/reset.css';
import 'antd/dist/antd.css';
import '../../styles/style.css';
import '../../styles/variables.css';
import PrivateRoute from "../PrivateRoute"
import Dashboard from '../Dashboard/Dashboard'
import Homepage from '../Homepage/Homepage'
import Tab from '../Dashboard/Tab'
import classes from './App.module.css'


const App = () => {
  return (
    <div className={classes.App}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path='/dashboard' element={<PrivateRoute/>}>
                <Route path='/dashboard' element={<Dashboard/>}>
                  <Route path=':tabType' element={<Tab/>}/>
                </Route>
              </Route>
            </Routes>
          </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
