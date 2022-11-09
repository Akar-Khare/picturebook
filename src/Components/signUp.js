import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './css/signUp.css'

function SignUp() {

  const navigate = useNavigate();
  const [userForm,setUserForm] = useState({name:"", email:"", password:"", cpassword:""});



  const handleRegChange = (e)=>{
    e.preventDefault()
    
    setUserForm(prevForm =>{
      return{...prevForm,[e.target.name]:e.target.value}
    })

    
  }

  const registerUser = async (e)=>{
    e.preventDefault();

    const {name,email,password,cpassword} = userForm;

    
    if(password !== cpassword){
      document.getElementById('passNotMatched').innerText="Passwords don't Match";
      console.log("Password not matched")
      return;
    }


    const res = await fetch('/register',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,password
      })
    });

    res.json().then((response)=>{

    // const data = await res.json();

    //  console.log(response);
    if(res.status === 422 )
    {
      document.getElementById('passNotMatched').innerText=response.error;
  
    }
    else{
     // console.log("User successfully register")
     document.getElementById('passNotMatched').innerText=response.message;
     
     setTimeout(()=>navigate("/feeds"),1000);
    }
  }
    );

  }


  return (
    
    <section className="vh-100" style={{backgroundColor: '#eee'}}>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{borderRadius: "25px"}}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
  
                  <form className="mx-1 mx-md-4" onSubmit={(e)=>registerUser(e)}>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" onChange={(e)=>handleRegChange(e)} className="form-control" name="name" required/>
                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" onChange={(e)=>handleRegChange(e)} className="form-control" name="email" required/>
                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" onChange={(e)=>handleRegChange(e)} name ="password" className="form-control" required />
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4cd" onChange={(e)=>handleRegChange(e)} name="cpassword" className="form-control" required/>
                        <label className="form-label" htmlFor="form3Example4cd">Confirm password</label>
                      </div>
                    </div>
  
                    {/* <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                      <label className="form-check-label" htmlFor="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div> */}
                    <div id="passNotMatched"></div>
  
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg">Register</button>
                    </div>
  
                  </form>
  
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="https://img.freepik.com/premium-vector/girl-with-laptop-social-media-woman-glasses-with-notifications-her-head-cartoon-style_338906-36.jpg?w=2000"
                    className="img-fluid" alt="Sample" />
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}
export default SignUp;