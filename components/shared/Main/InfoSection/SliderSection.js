"use client"
import { useState, useEffect } from 'react';

export const SliderSection=()=>{
    const [leftPlanets, setLeftPlanets] = useState(8)
    const [planets, setPlanets]= useState(0);
    const [rightPlanets, setRightPlanets]= useState(1);

    
    //const planetStyle={
        // backgroundImage: url(../../../public/neptune.webp),
        //backgroundImage: 'url(/planet`{planets}`.webp)',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
    //}
    // useEffect(()=>{
    //     const handleIncreasePlanets=()=>{
    //         if (planets >= 8){
    //             setPlanets(0);
    //         } else {
    //             setPlanets(planets +1);
    //         }
    //     }
    
    //     const handleDecreasePlanets=()=>{
    //         if (planets <= 0){
    //             setPlanets(8);
    //         } else {
    //             setPlanets(planets -1);
    //         }
    //     }
    //     handleIncreasePlanets();
    //     handleDecreasePlanets();

    //     return

    // },[]);

    const handleIncreasePlanets=()=>{
        if (leftPlanets >= 8 ){
            setLeftPlanets(0);
            setPlanets(1);
            setRightPlanets(2);
        } else if (planets >= 8){
            setLeftPlanets(8);
            setPlanets(0);
            setRightPlanets(1);
        } else if (rightPlanets >= 8){
            setLeftPlanets(7);
            setPlanets(8);
            setRightPlanets(0);    
        } else {
            setLeftPlanets(leftPlanets +1);
            setPlanets(planets+1);
            setRightPlanets(rightPlanets +1);
        }
     }

    const handleDecreasePlanets=()=>{
        if (rightPlanets <= 0){
            setLeftPlanets(6);
            setPlanets(7);
            setRightPlanets(8);
        } else if (planets <= 0){
            setLeftPlanets(7);
            setPlanets(8);
            setRightPlanets(0);
        } else if (leftPlanets <= 0){
            setLeftPlanets(8);
            setPlanets(0);
            setRightPlanets(1);
        } else {
            setLeftPlanets(leftPlanets -1);
            setPlanets(planets -1);
            setRightPlanets(rightPlanets -1);
        }
    }

    //console.log(planets);
    


    return(
        <>
            <section className="slider-section">
                <span className="slider">
                    <div className="nav-box__left" onClick={handleIncreasePlanets}>
                        <div style={{backgroundImage: 'url(/planet'+ leftPlanets + '.webp)'}} className="nav-box__left-pic" ></div>
                        <div className="nav-box__title">Neptune{leftPlanets}</div>
                    </div>
                    <div className="nav-box">  {planets} 
                        {/* <img src="planets.webp" width="700px" height="700px"/> */}
                        <div style={{backgroundImage: 'url(/planet'+ planets + '.webp)'}} className="nav-box__main"></div>
                        
                    </div>     
                    <div className="nav-box__right" onClick={handleDecreasePlanets}>
                        <div className="nav-box__title">Mercury{rightPlanets}</div>
                        <div style={{backgroundImage: 'url(/planet'+ rightPlanets + '.webp)'}} className="nav-box__right-pic"></div>
                    </div>
                </span>
            </section>
        </>
    )
}