import React from 'react'
import './Hero.css';
import dark_arrow from "../../assets/dark-arrow.png"
const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>We Ensure better education for a better  world.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit aliquet maximus.
                    Vestibulum mollis eu ante et hendrerit. Ut faucibus ullamcorper sapien et finibus. Aliquam odio augue,
                </p>
                <button className='btn'>Explore More <img src={dark_arrow} alt="->" /></button>
            </div>
        </div>
    )
}

export default Hero;
