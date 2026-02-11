import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import './MobileLayout.css';

const MobileLayout = () => {
    const location = useLocation();
    const noFooterPages = [
        '/',
        '/onboarding',
        '/setting',
        '/gender',
        '/age',
        '/weight',
        '/height',
        '/address',
        '/favorite',
        '/confirm'
    ];

    const normalizedPath = location.pathname.endsWith('/') && location.pathname !== '/' 
        ? location.pathname.slice(0, -1).toLowerCase()
        : location.pathname.toLowerCase();

    const showFooter = !noFooterPages.includes(normalizedPath);

    return (
        <div className="mobile-container">
            <div className="app-content">
                <Outlet />
            </div>
            {showFooter && <Footer />}
        </div>
    );
};

export default MobileLayout;
