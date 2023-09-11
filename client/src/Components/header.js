import { UserContext } from '../App';
import React,{useContext, useEffect, useState} from 'react';
import './css/header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



let dropStyle={display:'flex',justifyContent:'center'};


function Header() {

  const user = useContext(UserContext);
  // console.log("Header User :"+user)
  
 
  return (

    
   
   

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/"><h1>Picture Book</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" >
            {user && <Nav.Link href="/profile"><button className='btn btn-warning'>{user.name}</button></Nav.Link>}
            <Nav.Link href="/people" ><button className='btn btn-primary' >People</button></Nav.Link>
            {!user && <><Nav.Link href="/signIn"  ><button className='btn btn-light' >Login</button></Nav.Link>
            <Nav.Link href="/signUp" ><button className='btn btn-secondary' >Register</button></Nav.Link></>}
            {user && <Nav.Link href="/logOut"  ><button className='btn btn-danger' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg></button></Nav.Link>}
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>




  )
}
export default Header;

 {/* <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <div className="container-fluid">
    <NavLink  to='/' style={style} className  ="navbar-brand"><h1>Picture Book</h1></NavLink >

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
      

      {user && <li className="nav-item" >
        <NavLink  to='/profile' className='nav-link' style={style}><button className='btn btn-warning'>{user.name}</button></NavLink >
      </li>}
     
      
     
   {!user && <li className="nav-item">
        <NavLink  to='/signIn' className='nav-link' style={style}><button className='btn btn-light' >Login</button></NavLink >
        </li>}

       { !user && <li className="nav-item">
        <NavLink  to='/signUp' className='nav-link' style={style}><button className='btn btn-secondary' >Register</button></NavLink >
        </li>
      }
       <li className="nav-item" >
        <NavLink  to='/people' className='nav-link' style={style}><button className='btn btn-primary' >People</button></NavLink >
        </li>
      
        {user && <li className="nav-item"  >
      <NavLink  to='/logOut' className='nav-link'  style={style}><button className='btn btn-danger'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg></button></NavLink >
      </li>}
      </ul>
      
    </div>
    </div>
  
    
  
 
</nav> */}