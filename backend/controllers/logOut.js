exports.logOut = ((req, res) => {

   
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send("Logout successful")

})