import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MentorRegister from '../components/Mentor_register';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import LearnerRegister from '../components/Learner_register';

const Register = () => {
    const { isNeedingMentor, setIsNeedingMentor } = useContext(AppContext);
    
  return (
    <div>
        <Navbar/>
        {isNeedingMentor?<LearnerRegister/>:<MentorRegister/>}

        <Footer/>
    </div>
  )
}

export default Register