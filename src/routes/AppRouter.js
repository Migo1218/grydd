import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from '../components/Dashboard';




import Login from '../components/Login'

const AppRouter = () => {
  const userData = useSelector((state) => state.login.user);
  return (
    <div>
        <BrowserRouter>
        
          <Routes>
            <Route exact path="/login" element={<Login />} />
            {userData ? <Route exact path="/dashboard" element={<Dashboard />} />: null  }
          </Routes>        
        </BrowserRouter>
    </div>
  )
}

export default AppRouter