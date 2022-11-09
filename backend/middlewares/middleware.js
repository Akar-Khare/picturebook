const User = require('../schema/UserSchema');
const jwt = require('jsonwebtoken');

exports.isAuthenticated = (

    async (req, res, next) => {
        console.log("Cookies was "+req.cookie);
        const { jwtoken } = req.cookies;
    
        if(!jwtoken) {
            return res.send (401, 'Unauthorized');
        }
    
        const userData = jwt.verify(jwtoken, process.env.SECRET);
        req.user = await User.findById(userData.id);
        console.log("UserId: "+userData);


        next();

        
})

