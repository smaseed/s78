import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
const Menu = () => {
    const token = localStorage.getItem('token');

    let isTokenExpired = true;
  
    if (token){
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      console.log(decodedToken);
      const currentTime = Math.floor(Date.now() / 1000);
      isTokenExpired = decodedToken.exp < currentTime;
    }

    // const isTokenAuthenticate = token && isTokenExpired;
    return (
        <header className='header'>
            <nav className='navbar'>
            <a href="/" className='logo'>Clean Energy 2024</a>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>                
                    </li>
                    <li>
                        <Link to="/summary">Summary</Link>           
                    </li>
                    <li>
                        <Link to="/report">Report</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu