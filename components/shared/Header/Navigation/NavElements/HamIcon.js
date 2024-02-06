"use client"
import React, { useState } from "react";

export const HamIcon=()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return(
        <>
            <div className={`nav-container ${isOpen ? 'change' : ''}` } onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </>
    )
}