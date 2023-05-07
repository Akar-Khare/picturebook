const setCookie = ()=> // already login or not
    fetch('https://pbookserver.onrender.com/setCookie',{
      method:'GET',
      headers: {
    
          accept: 'application/json',
          "Content-Type":'application/json'
      },
      credentials:"include"
      
    
    })

  export default setCookie;