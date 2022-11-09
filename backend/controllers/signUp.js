
const User = require('../schema/UserSchema');

exports.signUp = (async (req, res) => {

    console.log("This is Register "+req.body);
      const{ name,email,password } = req.body;
  
   
  
      if(!name || !email || !password)
      res.status(422).json({error: "Incomplete information"});
  
      try {  
  
      const userExist = await User.findOne({email : email});
  
  
      if(userExist){
         res.status(422).json({error : "email already exists"})
          
  }
  
      const makeUser = new User({
  
          name,
          email,
          password,
          date: new Date()
  
      });
  
      await makeUser.save()
  
      res.status(201).json({message: "User registered successfully"}) ;
  
    }
    catch(err){
      console.log(err);
    }
   })


