import React from 'react'
import Header from '../Components/header'
import SignIn from '../Components/signIn'

export default function signInPage() {
  return (
    <>
     <Header to='/signUp' content = 'Sign Up'/>
     <div className='main-container'>
  
   <SignIn/>
   </div>
  </>
  )
}
