import React from 'react'
import Navbar from '../components/Navbar'
import HomeHeader from '../components/Home_header'
import StruggleSection from '../components/Struggle'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeHeader/>
        <StruggleSection/>
        <Footer/>
    </div>
  )
}

export default Home