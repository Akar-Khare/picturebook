import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {

    const {state} = useLocation();
    console.log(JSON.stringify(state.name));
    

  return (
    <div className='container-fluid'>
        
    </div>
  )
}

export default About