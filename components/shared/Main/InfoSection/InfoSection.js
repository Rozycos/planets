//import { Navigation } from "./Navigation/Navigation"

export const InfoSection=()=>{
    return(
        <>
            <section className="info-section">
                <div className="planet-name">Sun</div>
                <span className="boxes">
                    <div className="box">
                        <div className="box-title">Galaxy</div>
                        <div className="box-info">Milky Way</div>
                    </div>
                    <div className="box">
                        <div className="box-title">Diameter</div>
                        <div className="box-info">1,392,684 km</div>
                    </div>
                    <div className="box">
                        <div className="box-title">Length of day</div>
                        <div className="box-info">---</div>
                    </div>
                    <div className="box">
                        <div className="box-title">Average temperature</div>
                        <div className="box-info">6000 Kelvin</div>
                    </div>
                </span>
            </section>
        </>
    )
}