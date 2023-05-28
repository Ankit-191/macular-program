import React from 'react'
import Heroseation from './components/Heroseation'
import Symptoms from './components/Symptoms'
import Ourmethodology from './components/Ourmethodology'
import Homing from './components/Homing'
import Patientrecover from './components/Patientrecover'
import Optimize from './components/Optimize'
import Success from './components/Success'
import Eligible from './components/Eligible'
import Fee from './components/Fee'
import Experts from './components/Experts'
import Patinets from './components/Patinets'
import Askedquestions from './components/Askedquestions'
import Footer from './components/Footer'

const Home = () => {
  return (
    <>
     <Heroseation/>
     <Symptoms/>
     <Ourmethodology/> 
     <Homing/>
     <Optimize/>
     <Patientrecover/>  
     <Success/>
     <Eligible/>
     <Fee/>
     <Experts/>
     <Patinets/>
     <Askedquestions/>
     <Footer/>
    </>
  )
}

export default Home