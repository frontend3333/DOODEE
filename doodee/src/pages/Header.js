import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
 

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <Link to='/'>
                    <img 
                        src = 'https://static.wixstatic.com/media/f1b974_dffb61ce0016439e92f499e66e57a716~mv2.png/v1/fill/w_243,h_62,al_c,q_85,usm_0.66_1.00_0.01/logo.webp'
                        alt = 'doodee logo'
                    />
                </Link>
            </div>
            <div className='phone-num'>
                010 0000 0000
            </div>
            <div className='menus'>
                <ul>
                <Link to='/' >
                    <li className = 'home-btn'>Home</li>
                </Link>
                <Link to='/process' >
                    <li className = 'process-btn'>Process</li>
                </Link>
                <div className='projects-dropdown'>
                    <Link to='/projects'>
                        <li className = 'projects-btn'>Projects</li>
                    </Link>
                    <div className='projects-dropdown-menus'>
                        <Link to='/projects'>
                            <li className = 'projects-housing-btn'>Housing</li>
                        </Link>
                        <Link to='/projects'>
                            <li className = 'projects-commercial-btn'>Commercial</li>
                        </Link>
                    </div>
                </div>
                <Link to='/estimates'>
                    <li className = 'estimates-btn'>Estimates</li>
                </Link>
                </ul>
                
            </div>
        </div>
    );  
};

export default Header;