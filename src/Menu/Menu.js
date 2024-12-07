import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Menu.css'
const Menu = () => {

    const {isAuthenticated, logout} = useAuth();
    const navigate = useNavigate();


    const handleLogout = ()=> {
        logout();
        setTimeout(() => {
            navigate("/login", {replace: true}); // Redirect to the home page (root)
        }, 100); 
    }
        return (
                <header className='header'>
                    <nav className='navbar'>
                    <a href="/dashboard" className='logo'>Clean Energy 2024</a>
                        <ul>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>                
                            </li>
                            <li>
                                <Link to="/summary">Summary</Link>           
                            </li>
                            <li>
                                <Link to="/report">Report</Link>
                            </li>
                            {isAuthenticated && (
                                <button onClick={handleLogout} className='logout-button'>Logout</button>                                
                            )}

                        </ul>
                    </nav>
                </header>
        );
    // }
}

export default Menu