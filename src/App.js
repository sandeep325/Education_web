import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title title="What we offer" subtitle="OUR PROGRAM"/>
      <Programs/>
      <About/>
      <Title title="Campus Photos" subtitle="Gallery"/>
      <Campus/>
      <Title title="What students says" subtitle="Testiminials"/>
      <Testimonial/>
      <Title title="Contact Us" subtitle="Get in touch"/>
      <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
