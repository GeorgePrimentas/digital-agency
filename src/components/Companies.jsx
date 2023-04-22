import React from 'react';
import Spotify from "./../images/Spotify.svg"
import Slack from "./../images/Slack.svg"
import Dropbox from "./../images/Dropbox.svg"
import Zoom from "./../images/Zoom.svg"

const Companies = ()=>{
    return (
        <section className='companiesContainer'>
            <p>Trusted by 4,000+ companies</p>
            <div className = "logosContainer">
                <div className = "logosGroup">
                    <img src={Spotify} />
                    <img src={Slack} />
                    <img src={Dropbox} />
                    <img src={Zoom} />
                </div>
            </div>
        </section>
    )
}

export default Companies