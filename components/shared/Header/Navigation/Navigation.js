"use client"
import { HamburgerNav } from "./NavElements/HamburgerNav";
import { NavBar } from "./NavElements/NavBar";
import { useState, useEffect } from 'react';

export const Navigation =()=>{
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth <= 768);
        };
    
        window.addEventListener('resize', handleResize);
    
        handleResize(); 
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    return(
        <>
                  {isSmallScreen ? (
        /* Renderuj hamburger menu */
        <HamburgerNav />
      ) : (
        /* Renderuj zwykłą nawigację */
        <NavBar />
      )}
            {/* <NavBar/>
            <HamburgerNav/> */}
        </>
    )
}