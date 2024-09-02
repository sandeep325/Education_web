import React, { useEffect, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
const Navbar = () => {
   
  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 580 ? setSticky(true) : setSticky(false);
    });
  },[]);
  return (
    <nav className={`container ${sticky ? 'dark-nav': '' }`}>
<img src={logo} alt="LOGO"className='logo'/>
<ul>
    <li style={{cursor:"pointer"}}><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
    <li style={{cursor:"pointer"}}><Link to="programs" smooth={true} offset={-262} duration={500} >Program</Link></li>
    <li style={{cursor:"pointer"}}><Link to="about" smooth={true} offset={-262} duration={500} >About Us</Link></li>
    <li style={{cursor:"pointer"}}><Link to="campus" smooth={true} offset={-262} duration={500} >Campus</Link></li>
    <li style={{cursor:"pointer"}}><Link to="testimonial" smooth={true} offset={-262} duration={500} >Testimonial</Link></li>
    <li style={{cursor:"pointer"}}>
    <Link to="contact" smooth={true} offset={-258} duration={500} >
    <button className='btn'>Contact Us</button>
    </Link>
    </li>

</ul>
    </nav>
  )
}

export default Navbar
