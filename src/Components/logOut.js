import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {
    const navigate = useNavigate();

    async function getlogOut(){

        const response = await fetch('/logOut',{
            method:'GET',
            headers: {

                accept: 'application/json',
                "Content-Type":'application/json'
            },
            credentials:'include'

        });

        if(response){
            console.log(response)
            navigate('/');
        }
    }
    useEffect(()=>{
        getlogOut();
    })


  return (
    <div>logOut</div>
  )
}

export default LogOut