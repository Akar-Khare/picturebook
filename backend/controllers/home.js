exports.home = ((req, res) => {

    // console.log(userName)\
    const userName = req.user.name;
    const userId = req.user._id;
   res.status(201).json({userName: userName,userId: userId});
   

})