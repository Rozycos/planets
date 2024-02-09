"use client"
import Link from "next/link";
//import { HamIcon } from "./HamIcon";
import React, { useState } from "react";

export const HamburgerNav =()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return(
        <>
            <nav className="container">
                <ul className="nav">
                    <li>
                        <div className={`nav-container ${isOpen ? 'change' : ''}` } onClick={toggleMenu}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </li>
                    <li>
                        <div className="logo">
                            <Link href="/" passHref>
                                <h1>Universe</h1>
                            </Link>
                        </div>
                    </li>
                    <li className="dummy"></li>
                </ul>
                <div className={`${isOpen ? '' : 'hide'}`}> 
                {/* wystylować tego diva */}
                    <ul>
                        <li>
                            {/* <Link href="/" passHref>
                                <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
                            </Link> */}
                            <Link href="/" passHref>Home</Link>
                        </li>
                        <li>
                            <Link href="/blog" passHref>Blog</Link>
                        </li>
                        <li>
                            <Link href="/about" passHref>About</Link>
                        </li>
                        <li>
                            <Link href="/contact" passHref>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}