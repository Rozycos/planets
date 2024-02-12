import Image from "../../../../public/planets.webp"

export const SliderSection=()=>{
    return(
        <>
            <section className="slider-section">
                <span className="slider">
                    <div className="nav-box__left">
                        <div className="nav-box__left-pic"></div>
                        <div className="nav-box__title">Neptune</div>
                    </div>
                    <div className="nav-box">   
                        
                        {/* <img src="planets.webp" width="700px" height="700px"/> */}
                        <div className="nav-box__main"></div>
                        
                    </div>     
                    <div className="nav-box__right">
                        <div className="nav-box__title">Mercury</div>
                        <div className="nav-box__right-pic"></div>
                    </div>
                </span>
            </section>
        </>
    )
}