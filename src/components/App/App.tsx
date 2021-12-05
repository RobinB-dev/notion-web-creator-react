import React from 'react';
import { AuthProvider } from "../../contexts/AuthContext"
import { DataProvider } from '../../contexts/DataContext'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import '../../styles/reset.css';
import '../../styles/style.css';
import '../../styles/variables.css';
import PrivateRoute from "../PrivateRoute"
import { Dashboard, Tab } from '../Dashboard/Dashboard'
import Homepage from '../Homepage/Homepage'
import classes from './App.module.css'


const App = () => {
  return (
    <div className={classes.App}>
        <Router>
          <AuthProvider>
            <DataProvider>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path='/dashboard' element={<PrivateRoute/>}>
                  <Route path='/dashboard' element={<Dashboard/>}>
                    <Route path=':tabType' element={<Tab/>}/>
                  </Route>
                </Route>
              </Routes>
            </DataProvider>
          </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
