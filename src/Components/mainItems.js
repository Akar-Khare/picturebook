import React, { useEffect } from 'react'

let mainStyle = {
    width: '18rem',
    height :'fit-content',
    border : '2px solid orange',
  
    
  }
  


function MainItems(props) {
  
 

  return (
    <div className="card" style={mainStyle}  key ={props.id} >
    <img className="card-img-top" src={props.data.imgSrc } alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card {props.data.cardName}</h5>
      <p className="card-text">{props.data.cardDesc}</p>
        <div><button className='btn btn-secondary' style={{width: '50%',float:'right'}} onClick={()=>{props.delete(props.id)}}>Delete</button></div>
     
    </div>
    </div>
  
  )
}
export default MainItems;