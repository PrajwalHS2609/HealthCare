import React from 'react'
import AboutUsHeader from './AboutUsHeader'
import AboutUsContact from './AboutUsContact/AboutUsContact.jsx'
import Doctors from '../HomePage/Doctors/Doctors.jsx'
import MedicalService from '../HomePage/MedicalService/MedicalService.jsx'
import MedicalMarquee from './../HomePage/MedicalMarquee/MedicalMarquee';
import AboutUsAppointment from './AboutUsAppointment.jsx'

const AboutUs = () => {
  return (
    <div>
      <AboutUsHeader/>
      <AboutUsContact/>
      <MedicalService/>
      <Doctors/>
      <MedicalMarquee/>
      <AboutUsAppointment/>
    </div>
  )
}

export default AboutUs
