import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import App from '../App';
import './Menu.css'
const Menu = () => {
    const [isTokenAuthenticate, setIsTokeAuthenticate] = useState(false);
    const [loggedOut, setLoggedOut] = useState(false);
    useEffect( () => {
        const token = localStorage.getItem('token');
        let isTokenExpired = true;
  
        if (token){
          const decodedToken = JSON.parse(atob(token.split('.')[1]));
          console.log(decodedToken);
          const currentTime = Math.floor(Date.now() / 1000);
          isTokenExpired = decodedToken.exp < currentTime;
        }

        setIsTokeAuthenticate(token && !isTokenExpired);
    });


    const handleLogout = ()=> {
        localStorage.removeItem('token');
        setLoggedOut(true);
        // navigate('/login');
    }
    if (loggedOut){
        return (
            <App/>
        );
    } else {
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
                            {isTokenAuthenticate && (
                                <button onClick={handleLogout} className='logout-button'>Logout</button>                                
                            )}

                        </ul>
                    </nav>
                </header>
        );
    }
}

export default Menu