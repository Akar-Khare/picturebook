const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    user: String,
    link :  String,
    name: String,
    desc: String
})

const Card = new mongoose.model("card",cardSchema);

module.exports = Card
