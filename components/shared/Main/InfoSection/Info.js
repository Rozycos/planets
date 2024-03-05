"use client"
import { useState, useEffect } from 'react';

export const Info=({ countersConfig })=>{
    const [counters, setCounters] = useState(
        countersConfig.reduce((acc, config) => {
          acc[config.name] = 0;
          return acc;
        }, {})
      );
    
      useEffect(() => {
        const animationFrames = [];
    
        const animateCounter = (name, startTime, targetNumber, animationDuration, unit) => {
          const countAnimation = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
    
            if (elapsedTime < animationDuration) {
              const progress = (elapsedTime / animationDuration) * targetNumber;
              setCounters((prevCounters) => ({
                ...prevCounters,
                [name]: { value: Math.ceil(progress), unit },
              }));
              animationFrames[name] = requestAnimationFrame(countAnimation);
            } else {
              setCounters((prevCounters) => ({
                ...prevCounters,
                [name]: { value: targetNumber, unit },
              }));
            }
          };
    
          countAnimation();
        };
    
        countersConfig.forEach((config) => {
          const { name, targetNumber, animationDuration, unit } = config;
          animateCounter(name, Date.now(), targetNumber, animationDuration, unit);
        });
    
        // Cleanup function to cancel animation frames
        return () => {
          Object.values(animationFrames).forEach((frame) => cancelAnimationFrame(frame));
        };
      }, [countersConfig]);
    
    return (
        <>
            {Object.entries(counters).map(([name, { value, unit }]) => (
            <div key={name} className="box">
                <div className="box-title">{name}</div>
                {/* <div className="box-info">{value !== undefined ? value.toLocaleString() : ''} {unit}</div> */}
                <div className="box-info">{value} {unit}</div>
            </div>
            ))}                   
        </>
    )
}