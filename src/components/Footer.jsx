import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <nav className="global-footer">
            <NavLink to="/menu" className={({ isActive }) => isActive ? "footer-item active" : "footer-item"}>
                <span className="material-symbols-outlined">home</span>
            </NavLink>
            <NavLink to="/map" className={({ isActive }) => isActive ? "footer-item active" : "footer-item"}>
                <span className="material-symbols-outlined">location_on</span>
            </NavLink>
            <NavLink to="/favorite" className={({ isActive }) => isActive ? "footer-item active" : "footer-item"}>
                <span className="material-symbols-outlined">favorite</span>
            </NavLink>
            <NavLink to="/setting" className={({ isActive }) => isActive ? "footer-item active" : "footer-item"}>
                <span className="material-symbols-outlined">person</span>
            </NavLink>
        </nav>
    );
};

export default Footer;
