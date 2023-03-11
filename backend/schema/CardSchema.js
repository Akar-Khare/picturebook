const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({

    userId: String,
    userName: String,
    card:{
            key: String,
            link :  String,
            name: String,
            desc: String,
            likesCount : {type: Number, default:0},
            likedBy:[String]
        }

    
})

const Card = new mongoose.model("card",cardSchema);

module.exports = Card
