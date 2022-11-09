import React, { useState , useEffect} from 'react'
import './css/main.css'
import AddImage from './addImage'
import MainItems from './mainItems'

let mainStyle = {
  width: '18rem'
}


const Main=()=> {

  console.log('main rendered')
  const [cards,setCards] = useState([]);
  const [addBox,setAddBox] = useState(false);
  const [cardId,setCardId] = useState();

 const addDialog = () => {

  setAddBox(true);

 }

 const postData = async (data) =>{


  const {src, name, desc} = data;

 console.log(data);
  
  
  const res = await fetch("/register",{

    method :'POST',
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(
      { link:"https://picsum.photos/200?random="+cardId,
       name, 
       desc}
    )
  })

 }

const addItem = (formData) =>{


    setCardId(Math.floor(Math.random()*1000));
    setCards(
   
      [{

        imgSrc: formData.src ? formData.src : "https://picsum.photos/200?random="+cardId,
        cardName: formData.name ? formData.name:cardId,
        cardDesc: formData.desc
      },...cards]
  
    );
    setAddBox(false);

   postData(formData);
  
} 
const deleteItem = (item) =>{
  let newCards = cards.slice();
  newCards.splice(item,1);
  setCards(newCards)
}

  return (
  <>
  <div className='btn-div'>
    
    { !addBox &&<button type="button" className='btn btn-success btn-small' onClick={()=>addDialog()}>+ Add Images</button>}
    
     
  </div>
    
  <div className={addBox ? 'card-container-blur' : 'card-container'}>
  
  {cards.map((item)=><MainItems data={item} delete={deleteItem} id={cards.indexOf(item)} />
  )}
    
  
  </div>

  { addBox && <AddImage addItem={addItem} close={setAddBox}/>}
  
    </>
  )

}
export default Main;