const Card = require('../schema/CardSchema');


exports.getCards = (async (req, res) => {

   // const userId =  req.user._id;

    const {userId} = req.body;

    console.log("UserId :"+userId)
    const findUser = await Card.find({userId: userId});

    res.status(201).json(findUser);


})

  