const Card = require('../schema/CardSchema');

exports.liked = (async (req, res) => {

    const thisUser =  req.user._id;
    const {cardId,liked} = req.body;
    
    console.log("liked was "+thisUser)
    if(liked){
        await Card.findByIdAndUpdate(cardId,
        {
            "$push": { "card.likedBy": thisUser },
            
            "$inc": { "card.likesCount": 1 }
            
        }
        );
         
    }
    else {
      
       await Card.findByIdAndUpdate(cardId,
            {
                "$pull": { "card.likedBy": thisUser },
                
                "$inc": { "card.likesCount": -1 }
                
            }
            );
         
    }



    res.status(201).json();

})
  