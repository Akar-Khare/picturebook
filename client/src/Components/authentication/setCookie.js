const setCookie = (email,password)=> // already login or not
    fetch('https://pbookserver.onrender.com/setCookie',{
      method:'POST',
      headers: {
    
          accept: 'application/json',
          "Content-Type":'application/json'
      },
      body:JSON.stringify({
        email,password
      }),
      credentials:"include"
      
    
    })

  export default setCookie;