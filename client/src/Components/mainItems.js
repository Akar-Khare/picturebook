import React, { useState } from 'react'

let mainStyle = {
  width: '18rem',
  height :'fit-content',
  border : '2px solid black',
  transition:'all 0.7s ease',
  transform: 'scale(1)'
 
 
  

}

function MainItems({data, user,profile, handleDelete,isAuthenticated,posted, likePost}) {
 

  user && console.log("User name id "+user.name,user.id);
  let defaultLike = user && data.card.likedBy.includes(user.id) ? true : false;
  const [liked,setLiked] = useState(defaultLike);
  const [loaded,setLoaded] = useState(false);

  console.log("Data source: "+data.card.link);
  const toggleLike = (value)=>{

    setLiked(value);
    likePost(data._id,value)

  }
  // loaded ? {display:"initial"}: {display:"none"}
 

 return (
    <>




   <div className="card"  style={loaded ? mainStyle:{transform: "scale(0.8)"}}  key ={data.card.key} >
    <img onLoad={()=>setLoaded(true)}  style={loaded ? {transition:"all 0.7s ease",transform: "scale(1)"}: {transform: "scale(0.9)"}} className="card-img-top" src={data.card.link} alt="Card cap"/>
    <div className="card-body">
      <h5 className="card-title">Card {data.card.name}</h5>
      <p className="card-text" style={{ fontFamily: "Arial"}} >- {data.card.desc}</p>
        {profile ? <div><button  type="button" className='btn btn-outline-danger'  onClick={()=>{handleDelete(data._id)}} style={{width: 'fit-content',float:'left'}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button></div> : !posted && <div style={{display:"flex",width:"100%",justifyContent:"right"}}><h6 style={{fontStyle:"italic"}}>{`Posted By : ${data.userName}`}</h6></div>}

{(!profile && isAuthenticated) ? liked ? <div onClick={()=>{toggleLike(false)}}  style={{cursor:"pointer",float:"left"}}><svg style={{color:"red"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
</svg></div> :<div onClick={()=>{toggleLike(true)}} style={{cursor:"pointer",float:"left"}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg></div>:<div></div>}
<div style={{display:"block",float:"right"}}><h6 style={{color:"grey"}}>{`${data.card.likesCount} likes`}</h6></div>
     


    </div>
    </div>
  </>
  )
}
export default MainItems;