import { InfoSection } from "./InfoSection/InfoSection"
import { SliderSection } from "./InfoSection/SliderSection"

export const Main=()=>{
    return(
        <>
            <main className="main-container">
                <InfoSection/>
                <SliderSection/>
            </main>
        </>
    )
}