import React, { useEffect, useState } from 'react';
import './css/userStyle.css';
import Users from './users';


const People = () => {

    const [userFeeds,setUserFeed] = useState([]);

    const getUsers= async () =>{

        const res = await fetch("https://pbookserver.onrender.com/users",{
    
          method : 'GET',
          headers : {
            "Content-Type": "application/json"
          }
         
        });

        const data = await res.json();

        setUserFeed(data);
       
        console.log("Feeds"+data[0].name);
       
    }

    useEffect(()=>{getUsers()},[]);

  return (
    
    <div className='users-container' >
   {userFeeds.map((user)=><Users user={user.name} userId={user.id} />)}
   </div>

  )
}

export default People;