import React from 'react';
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = (props) => {
  return (
    <div className='about'>
      <div className='left-about'>
        <img src={about_img} atl="About img" className='about-img'/>
        <img src={play_icon} atl="Play icon" className='play-icon' onClick={()=>{ props.setPlayStae(true)}}/>

      </div>
      <div className='right-about'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorrow's Leaders Today.</h2>
        <p>
        Ut auctor nisl sapien, ullamcorper tempor purus efficitur sed. 
        Quisque eu lacus magna. Ut non tortor dolor. Nulla auctor est odio, in ullamcorper diam vehicula vitae. 
        Praesent feugiat tincidunt ligula, sit amet suscipit leo. Orci varius natoque penatibus et magnis dis 
        parturient montes, nascetur ridiculus mus. Nullam euismod fermentum suscipit.</p>
        <p> Mauris mollis finibus lobortis. Aenean congue pulvinar nisl at cursus. Sed molestie ultrices nulla, et egestas neque rutrum cursus.
        </p>
      </div>
    </div>
  )
}

export default About
