import React, { useState , useEffect, useContext} from 'react'
import './css/main.css'
import AddImage from './addImage'
import MainItems from './mainItems'
import { Link, Navigate, useLocation} from "react-router-dom";
import { UserContext } from '../App';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const Main=({profile})=> {



  
  console.log('main rendered');

  const [cards,setCards] = useState([]);
  const [addBox,setAddBox] = useState(false);
  const [user,setUser] = useState();
  const {state} = useLocation();
  const thisUser = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [delId,setDelId] = useState();
  const [about,showAbout] =useState(false);

  const handleClose = () => {
    setShow(false);
    setDelId(null);
  }
  const handleDelete = (id) => {

    setDelId(id);
    setShow(true);
    

  }
  console.log("thisUser:"+thisUser)

  useEffect(()=>{

    if(profile)
    setUser(thisUser);
    else
    setUser({name:state.name,id:state.userId});

    
    
},[]);

  const getCards = async () =>{

    const res = await fetch("https://pbookserver.onrender.com/cards",{

      method :'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({userId:user.id})
     
    });

    const data = await res.json();

    setCards(data);
    

  }


  useEffect(()=>{ user && getCards()},[user,addBox,delId]);
  

  const addDialog = () => setAddBox(true);

  

  const deleteItem = () =>{
   fetch("/delete",{

      method :'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id:delId})
     
    }).then((res)=>res.json())
    .then((res)=>{
      res.status === '201' && handleClose();
    });

    

}




  return (
  <>
  
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Are you sure you want to delete this item?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style={{width:'fit-content'}} onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" style={{width:'fit-content'}} onClick={()=>{deleteItem()}}>Delete</Button>
        </Modal.Footer>
      </Modal>

  <div className='btn-div'>
    
    {/* add Image button */}
    
    {profile && !addBox &&<button style={{width:"fit-content"}} type="button" className='btn btn-success btn-small' onClick={()=>addDialog()}>+ Add Images</button>}
  <button className='btn btn-secondary btn-small' style={{width:"fit-content",marginLeft:"5px"}} onClick={()=>{showAbout(true)}}>Profile</button>
     
    

  </div>

    { about && <Navigate to="/about" state={user}/>}
     {/* add Image dialog */}
    { profile && addBox && <AddImage setAddBox={setAddBox} getCards={getCards}/>} 

    {user && <div><h5>{user.name}</h5><h6 style={{color:"grey"}}>Gallery</h6></div>}
  <div className={addBox ? 'card-container-blur' : 'card-container'}>
  

   {/* Main cards */}
  
  {cards && cards.map((item)=><MainItems handleDelete={handleDelete} data={item} deleteItem={deleteItem} posted={true} profile={profile} />
  )}
    
  
  </div>


    </>
  )


}
export default Main;