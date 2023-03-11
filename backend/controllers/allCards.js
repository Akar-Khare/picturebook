const Card = require('../schema/CardSchema');

exports.allCards = (async (req, res) => {

    const findCards= await Card.find();
  //  console.log("All cards: "+findCards)
    res.status(201).json(findCards);


})
