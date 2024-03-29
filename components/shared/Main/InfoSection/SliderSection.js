"use client"
import { useState, useEffect } from 'react';
import {data} from '../../../../data/data';
import { Info } from './Info';

export const SliderSection=()=>{
    const [leftPlanets, setLeftPlanets] = useState(8)
    const [planets, setPlanets]= useState(0);
    const [rightPlanets, setRightPlanets]= useState(1);
    const [solarSystem, setSolarSystem]=useState(0);
    //const [currentTranslate, setCurrentTranslate] = useState(0);
    const countersConfig = [
        { name: 'diameter', targetNumber: `${data[planets].diameter}`, animationDuration: 300, galaxy: `${data[planets].galaxy}`, unit:'km' },
        { name: 'lenght of day', targetNumber: `${data[planets].lenght}`, animationDuration: 300, galaxy: `${data[planets].galaxy}`, unit:'Earth hours' },
        { name: 'average temperature', targetNumber: `${data[planets].temperature}`, animationDuration: 300, galaxy: `${data[planets].galaxy}`, unit:'°C' },
      ]

    const handleIncreasePlanets=()=>{
        const step = 40;
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
        //setSolarSystem(40*planets+40);
        setSolarSystem((prevSolarSystem) => prevSolarSystem + step);
        //setCurrentTranslate((prevTranslate) => prevTranslate - 100);
     }

    const handleDecreasePlanets=()=>{
        const step = 40;
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
        setSolarSystem((prevSolarSystem) => prevSolarSystem - step);
        //setCurrentTranslate((prevTranslate) => prevTranslate + 100);
    }

    return(
        <>
            <section className="info-section">
                <div className="planet-name">{data[planets].name}</div>
                <span className="boxes">
                    <div className="box">
                        <div className="box-title">Galaxy</div>
                        <div className="box-info">{data[planets].galaxy}</div>
                    </div>
                    {/* <div className="box">
                        <div className="box-title">Diameter</div>
                        <div className="box-info">{data[planets].diameter} km</div>
                    </div>
                    <div className="box">
                        <div className="box-title">Length of day</div>
                        <div className="box-info">{data[planets].lenght} Earth hours</div>
                    </div>
                    <div className="box">
                        <div className="box-title">Average temperature</div>
                        <div className="box-info">{data[planets].temperature} °C</div>
                    </div> */}
                    <Info countersConfig={countersConfig} />
                </span>

            </section>
            <section className="slider-section">
                <span className="slider">
                    <div className="nav-box__left" onClick={handleIncreasePlanets}>
                        <div style={{
                                // backgroundImage: 'url(/planet'+ leftPlanets + '.webp)', transform: `translateX(${currentTranslate}px)`, transition: 'transform 0.5s ease'
                                backgroundImage: 'url(/planet'+ leftPlanets + '.webp)',
                            }} className="nav-box__left-pic" >
                        </div>
                        <div className="nav-box__title">{data[leftPlanets].name}</div>
                    </div>
                    <div className="nav-box">
                        {/* <img src="planets.webp" width="700px" height="700px"/> */}
                        <div style={{backgroundImage: 'url(/planet'+ planets + '.webp)'}} className="nav-box__main">
                            <div style={{
                                    content: "''",
                                    display: 'block',
                                    position:'relative',
                                    width: '100%',
                                    height: '100%',  
                                    backgroundImage: 'url(/solar_system_sq.webp)',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize:'cover',
                                    transform: `translate(0, 30%) rotate(${solarSystem}deg)`,
                                    zIndex: -1,
                                    //animation: 'rotateAnimation 0.5s ease', 
                                    transition: 'transform 0.5s ease',
                                }}>
                            </div>
                        </div>
                        
                    </div>     
                    <div className="nav-box__right" onClick={handleDecreasePlanets}>
                        <div className="nav-box__title nav-box__title--right">{data[rightPlanets].name}</div>
                        <div style={{backgroundImage: 'url(/planet'+ rightPlanets + '.webp)'}} className="nav-box__right-pic"></div>
                    </div>
                </span>
            </section>
        </>
    )
}