
import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { AuthProvider } from './Context/AuthContext';
import { useAuth } from './Context/AuthContext';
import AuthRoutes from "./Routes/AuthRoutes";
import Menu from './Menu/Menu'
import Dashboard from './DashBoard/DashBoard';
import SummaryPage from './SummaryPage/SummaryPage';
import ReportPage from './ReportPage/ReportPage';
import Login from './Login/Login';

function App() {
  const [isTokenAuthenticate, setIsTokenAuthenticate] = useState(false);
  const {isAuthenticated, logout} = useAuth();
  
  useEffect( () => {
    const token = localStorage.getItem('token');

    let isTokenExpired = false;
  
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      console.log(decodedToken);
      const currentTime = Math.floor(Date.now() / 1000);
      isTokenExpired = decodedToken.exp < currentTime;
    }
    if(isTokenExpired){
      logout();
    }
  
  }, []);

  return (
    <div className="App">
      <Menu className="navbar"/>
      <div className='background'>
      <div className='mainContainer'> 
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={isAuthenticated? <Dashboard/>: <Login/>}/>
            <Route path='/dashboard' element={isAuthenticated? <Dashboard/>: <Login/>}/>
            <Route path='/summary' element={isAuthenticated? <SummaryPage/>: <Login/>}/>
            <Route path='/report' element={isAuthenticated? <ReportPage/>: <Login/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
