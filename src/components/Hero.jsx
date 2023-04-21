import React from "react"
import BusinessPeople from "./../images/BusinessPeople.png"

const Hero = ()=>{
    return (
        <div>
            <div className="mainHeroContainer">
                <div className="textColumn">
                <h1 className="hero-heading">Building digital products, brands & experience</h1>
                <p>Digital Agency is your online team mangement tool that easy and prompt</p>
                <button class="contactUsButton">contact us</button>
                </div>
                <div className="imageColumn">
                    <img src={BusinessPeople} />
                </div>
            </div>
        </div>

    )
}

export default Hero