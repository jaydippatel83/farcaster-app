import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SignInButton, useSignIn } from '@farcaster/auth-kit';

const Header = () => {
const signin = useSignIn();
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    return (
        <div className={`py-2 px-5 md:py-5 border-b  bg-white  z-50 ${scroll ? "fixed w-full left-0 right-0 top-0 transition-all bg-white" : ""}`}>
            <div className="flex gap-2 sm:gap-4 items-center justify-between">

                <Link href="/" className="logo font-bold py-1 rounded-lg text-center">
                    <Image
                        src="https://content.cointopper.com/wp-content/uploads/2024/02/logo.jpeg"
                        alt="Cointopper"
                        height={50}
                        width={200}
                        priority
                        loading='eager'
                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                        className='w-48 h-11'
                        quality={100}
                    />
                </Link>

                <div className="items-center ">
                    <div className="navbar mr-4 flex justify-start list-none align-middle">
                     <li> <SignInButton /></li>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;