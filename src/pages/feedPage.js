import React from 'react'
import Header from '../Components/header'
import Main from '../Components/main'

export default function feedPage() {
  return (
  <>
   <Header to='/' content='Log Out'/>
   <div className='main-container'>
   <Main/>
   </div>
   </>
  )
}
