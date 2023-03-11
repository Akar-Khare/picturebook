const express = require('express');
const cookieParser = require('cookie-parser');
const {signUp} = require('../controllers/signUp');
const {logOut} = require('../controllers/logOut');
const {signIn} = require('../controllers/signIn');
const {newCard} =require('../controllers/card');
const {isAuthenticated} = require('../middlewares/middleware');
const {home} = require('../controllers/home');
const {getCards} = require('../controllers/getCards');
const {getUsers} = require('../controllers/getUsers');
const {allCards} = require('../controllers/allCards');
const {liked} =  require('../controllers/liked');
const {deleteCard} = require('../controllers/deleteCard');

const router = express.Router();

const bodyParser = require('body-parser');
router.use(cookieParser());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

require('../db/conn');


router.get('/about', (req, res) => {
  res.send('This is about')
})


router.get('/home',isAuthenticated,home);
router.post('/upload',isAuthenticated,newCard);  
router.post('/delete',isAuthenticated,deleteCard);
router.post('/register',signUp);
router.post('/login',signIn);
router.get('/logout',logOut);
router.route('/cards').get(allCards).post(getCards);
router.get('/users',isAuthenticated,getUsers);
router.post('/liked',isAuthenticated,liked)
  


module.exports = router;
  