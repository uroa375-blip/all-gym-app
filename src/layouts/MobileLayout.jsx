import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import './MobileLayout.css';

const MobileLayout = () => {
    return (
        <div className="mobile-container">
            <div className="app-content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MobileLayout;
