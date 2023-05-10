import React, { useState } from 'react'
import './css/addImage.css'
function AddImage(props) {


const [formData,setformData] = useState({
 
  src: '',
  name:'',
  desc:''
});  

const postData =  (data) =>{
  
  console.log(data);
  try{
  fetch("https://pbookserver.onrender.com/upload",{
    
    method :'POST',
    headers:{
      Accept:"application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
    credentials:"include",
    withCredentials:true
  }).then((response)=>{
    alert("Response");
  });
}
catch(error){
  alert("Error:"+error)
}
 

 }


const addSubmit = (e) =>{
  e.preventDefault();

  console.log(formData);
  
  const file = formData.src;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
     // Base64 Data URL 
  let cardId = Math.floor(Math.random()*1000);
  let newData =  {
    key: cardId,
    link: reader.result ? reader.result : "",
    name: formData.name ? formData.name:cardId,
    desc: formData.desc ? formData.desc:""
  };

  postData(newData);

  setTimeout(function(){props.setAddBox(false)},3000);

     console.log(reader.result);
 });
  reader.readAsDataURL(file);


  // link: formData.link ? formData.link : "https://picsum.photos/200?random="+cardId,
 
  
 
}
  return (
   <>
      
    <div className='popUp' >
     
        <form>
            <p><label htmlFor='img'>Select Image </label>  </p> 
            <input id='img' type='file'  accept="image/*" style={{marginBottom:'10px'}} onChange={(e)=>setformData({
              desc : formData.desc,
              // src: URL.createObjectURL(e.target.files[0]),
              src :e.target.files[0],
              name: formData.name
              })}/>
            <p><label htmlFor='cardName'>Card Name </label> </p> 
            <input id='cardName' type='text' style={{marginBottom:'10px', textAlign:'center'}} value= {formData.name} onChange={(e)=>setformData({
               desc : formData.desc,
               src:formData.src,
               name: e.target.value
            })}/>
            <p><label htmlFor='details'>Description</label></p> 
            <textarea id='details' placeholder='Details...' rows='5' value= {formData.desc} onChange={(e)=>setformData({ 
              desc : e.target.value,
              src:formData.src,
              name: formData.name})}></textarea>
            <p><button className='upload-btn' onClick={addSubmit}>Upload</button> <button className='upload-btn-cancel' onClick={()=>props.close(false)}>Cancel</button></p>
           
        </form>
       
    </div>
    </>
  )
}
export default AddImage;
