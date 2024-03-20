import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className="py-6 px-5 bg-ct-footer-dark"> {/* Increased padding */}
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="text-ct-footer-text text-md self-center sm:text-left">
                            <p>© Copyright {new Date().getFullYear()} <Link href="#" >CoinTopper</Link> All Rights Reserved</p>
                        </div> 
                    </div>
                </div>
            </div>
    );
};

export default Footer;