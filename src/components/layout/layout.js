import React from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <div className="flex flex-grow">
            <Sidebar />
            <main className="w-full">
                {children}
            </main>
        </div>
        <Footer />
    </div>
    );
};

export default Layout;