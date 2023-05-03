import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Users = ({user,userId}) => {

  const [getProfile,setGetProfile] =useState(false);
      
 
      

  return (<>
    <div className="card mb-3" id="select-card"  onClick={()=>setGetProfile(true)}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5  className="card-title">{user}</h5>
   </div>
   </div>
   </div>
   </div>
    {getProfile && <Navigate to="/main" state={{ name: user, userId: userId}}/>}
  </>
  )
}

export default Users
