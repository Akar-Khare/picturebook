const Card = require('../schema/CardSchema');


exports.deleteCard = (async (req, res) => {

    const {id} = req.body;

    const findCard = await Card.findByIdAndDelete({_id: id},{new:true});

    if(findCard)
        res.json({status:'201'});

    else res.json({status:'401'});     

    console.log(findCard);

})