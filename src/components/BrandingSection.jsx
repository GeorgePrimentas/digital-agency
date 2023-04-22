import React from "react"
import DesignerTeam from "./../images/DesignerTeam.png"

const BrandingSection = ()=>{
    return (
        // <div> This pair of divs really doesn't make any difference (21 Apr 2023)
            <div className="mainHeroContainer">
                <div className="imageColumn">
                    <img src={DesignerTeam} />
                </div>
                <div className="textColumn">
                <h1 className="hero-heading">Branding & Design System</h1>
                <p>
                    Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups
                </p>
                </div>
            </div>
        // </div>

    )
}

export default BrandingSection