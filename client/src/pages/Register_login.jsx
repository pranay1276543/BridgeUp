import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SelectLog from '../components/select_log'
import MentorLearner from '../components/Mentor_learner'

const Register_login = () => {
    
  return (
    <div>
        <Navbar/>
        <MentorLearner/>
        <SelectLog/>
        <Footer/>
    </div>
  )
}

export default Register_login