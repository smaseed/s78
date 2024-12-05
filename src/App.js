
import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Menu from './Menu/Menu'
import Dashboard from './DashBoard/DashBoard';
import SummaryPage from './SummaryPage/SummaryPage';
import ReportPage from './ReportPage/ReportPage';
import Login from './Login/Login';

function App() {
  const [isTokenAuthenticate, setIsTokenAuthenticate] = useState(false);
  
  useEffect( () => {
    const token = localStorage.getItem('token');

    let isTokenExpired = false;
  
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      console.log(decodedToken);
      const currentTime = Math.floor(Date.now() / 1000);
      isTokenExpired = decodedToken.exp < currentTime;
    }
  
    console.log(isTokenExpired);
    setIsTokenAuthenticate(token && !isTokenExpired);
  
  }, []);

  return (
    <div className="App">
      <Menu className="navbar"/>
      <div className='background'>
      <div className='mainContainer'>
          <Routes>
          <Route path='/' element={isTokenAuthenticate? <Dashboard/> : <Login/>}></Route>
            <Route path='/dashboard' element={isTokenAuthenticate? <Dashboard/> : <Login/>}></Route>
            <Route path='/summary' element={isTokenAuthenticate? <SummaryPage/> : <Login/>}></Route>
            <Route path='/report' element={isTokenAuthenticate? <ReportPage/> : <Login/>}></Route>
            <Route path='/login' element={isTokenAuthenticate? <ReportPage/> : <Login/>}></Route>
          </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
