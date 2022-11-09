exports.newCard = ((req, res) => {
  
    console.log(req.body)

  const{link, name ,desc} = req.body;

    const newCard = new card({
      userId,  
      link,
      name,
      desc
    })
    
    newCard.save()

    res.send('Card Saved')
  })