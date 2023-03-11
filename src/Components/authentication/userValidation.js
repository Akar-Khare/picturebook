

const validateUser = ()=> // already login or not
    fetch('/home',{
      method:'GET',
      headers: {
    
          accept: 'application/json',
          "Content-Type":'application/json'
      },
      credentials:'include'
    
    })

  export default validateUser;