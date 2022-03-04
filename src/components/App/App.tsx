import React from 'react';
import { AuthProvider } from "../../contexts/AuthContext"
import { DataProvider } from '../../contexts/DataContext'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PrivateRoute from "../PrivateRoute"
import { Dashboard, Tab } from '../Dashboard/Dashboard'
import Homepage from '../Homepage/Homepage'
import styles from './App.module.css'

import '../../styles/reset.css';
import 'antd/dist/antd.css';
import '../../styles/variables.css';
import '../../styles/fonts.css';
import '../../styles/style.css';


const App = () => {
  return (
    <div className={styles.App}>
      <Router>
        <AuthProvider>
          <DataProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path='/dashboard' element={<PrivateRoute />}>
                <Route path='/dashboard' element={<Dashboard />}>
                  <Route path=':tabType' element={<Tab />} />
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
