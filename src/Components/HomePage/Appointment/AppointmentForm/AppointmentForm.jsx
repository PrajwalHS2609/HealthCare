import React from 'react'
import "./AppointmentForm.css"
import AppointmentFormHead from './AppointmentFormHead'
import AppointmentFormMain from './AppointmentFormMain'
const AppointmentForm = () => {
  return (
    <div className='AppointmentForm'>
      <AppointmentFormHead/>
      <AppointmentFormMain/>
    </div>
  )
}

export default AppointmentForm
