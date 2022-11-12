import React from 'react'
import {NavLink} from 'react-router-dom'
import './css/header.css'


// const HeaderOptions = () =>{

//     if(true){
//       return (<li className="nav-item">
//       <NavLink  to='logout' style={style}><p className='p1'>Logout</p></NavLink >
//       </li>)
//     }
//     else{
//       return (
//         <>
//         <li className="nav-item">
//         <NavLink  to='login' style={style}><p className='p1'>Login</p></NavLink >
//         </li>

//         <li className="nav-item">
//         <NavLink  to='/register' style={style}><p className='p1'>Register</p></NavLink >
//         </li>
//         </>
//       )
    

//     }

// }
const style={
   textDecoration: 'none' 
}
export default function header({}) {
  return (

    <>
   
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <div className="container-fluid">
    <NavLink  to='/' style={style} className  ="navbar-brand"><h1>Picture Book</h1></NavLink >

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">

      <li className="nav-item">
      <NavLink  to='/logOut'  style={style}><p className='p1'>Logout</p></NavLink >
      </li>
     
    <li className="nav-item">
        <NavLink  to='/' style={style}><p className='p1'>Login</p></NavLink >
        </li>

        <li className="nav-item">
        <NavLink  to='/signUp' style={style}><p className='p1'>Register</p></NavLink >
        </li>
        

      </ul>
      
    </div>
    </div>
  
    
  
 
</nav>

</>



  )
}
