const Card = require('../schema/CardSchema');

exports.newCard = (async (req, res) => {
  
   

  const{key, link, name ,desc} = req.body;

  const userId =  req.user._id;
  const userName = req.user.name;

  //const findUser = await Card.findOne({userId: userId});
  
 
    const newCard = new Card({
    userId, 
    userName,
    card: {key,link,name,desc,count:0,likedBy:[]}
    })
    
    newCard.save();

    res.status(201).json({info:'Card created'});
  
  
   
  })