const User = require('../schema/UserSchema');
//const Card = require('../schema/CardSchema');




exports.getUsers= (async (req, res) => {

    

    const users = req.user ? await User.find({ _id: {$ne: req.user._id}}) :  await User.find();

    let userNames=[];
    users.map((user) =>{userNames = [...userNames,{name: user.name, id:  user._id }];});

    //const userData = {userData :userNames};
    
    // console.log(userNames)
    res.status(201).json(userNames);


})