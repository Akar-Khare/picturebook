import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LogOut = ({setAuth}) => {
    const navigate = useNavigate();

    async function getlogOut(){

        const response = await fetch('https://pbookserver.onrender.com/logOut',{
            method:'GET',
            headers: {

                accept: 'application/json',
                "Content-Type":'application/json'
            },
            credentials:'include'

        });

        // validate();//from app.js

        if(response){
            setAuth(false);
            console.log(response)
            navigate('/signIn');
        }
    }
    useEffect(()=>{
        getlogOut();
    })


  return (
    <div></div>
  )
}

export default LogOut