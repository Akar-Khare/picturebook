import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import MainItems from './mainItems';
import Loading from './loading';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



const Feeds = ({isAuthenticated}) => {

  // console.log("In feeds")
  

  const [allPosts,setAllPosts] = useState([]);
  const user = useContext(UserContext);
  const [Like,setLike] = useState(false);
  const skeletonCount=[0,0,0,0,0,0,0,0,0,0,0,0];
  
  const getAllPosts = async() =>{
    const res = await fetch("https://pbookserver.onrender.com/cards",{
  
      method :'GET',
      headers:{
        "Content-Type": "application/json"
      },
      credentials:"include",
      withCredentials:true
    });
  
    
    const data = await res.json();
  
  
  
    setAllPosts(data);

    
  }

  const likePost = (id,liked)=>{
    
    fetch("https://pbookserver.onrender.com/liked",{
      
      method :'POST',
      headers:{
        "Content-Type": "application/json"
      },
      credentials:"include",
      withCredentials:true
,
      body: JSON.stringify({cardId:id,liked:liked})
    }).then((res)=>{
      
      // console.log("Like status "+res.status)
      if(res.status===201)
       setLike(!Like);
   
    });
  }
 


useEffect(()=>{getAllPosts()},[Like])
    
  return (
   <>
    
     <div style={{textAlign: "center",marginTop:"20px"}}>{user &&<h5 > {`Welcome ${user.name}`}</h5>}<h6  style={{color:"grey"}}>Stories</h6></div>
     {allPosts[0] ?   
     
     <div className='card-container' > 
  {allPosts.map((post)=><MainItems data={post} user={user} likePost={likePost} isAuthenticated={isAuthenticated}/>) }
 

   </div>
  :  
  <div className='card-container' style={{width:"100%",gap:"10px"}}> 
   {skeletonCount.map((skel)=><div style={{width:"15%",marginBottom:"100px"}}> 
   <Skeleton width="100%"height={300} style={{marginBottom:'10px'}}/>
   <Skeleton width="100%" count={3} height={30} style={{marginBottom:'10px'}}/></div>)}
        
  </div>
  }
   
   {/* : <h5>{`No posts :(`}</h5>} */}


   </>
  )
}

export default Feeds;