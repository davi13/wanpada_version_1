var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');
var options = { server: { socketOptions: {connectTimeoutMS: 5000 } }};
////////////////////////////////////////////////////////////
// J'intègre password avec npm install --save password-hash
////////////////////////////////////////////////////////////
var passwordHash = require('password-hash');

mongoose.connect('mongodb://wanpada1:wanpada1@ds161790.mlab.com:61790/wanpada',
   options,
   function(err) {
    console.log(err);
   }
);

var userSchema = mongoose.Schema({
  nom: {type: String, required: true, min: 3, max: 10},
  prenom: {type: String, required: true, min: 3, max: 10},
  password: {type: String, required: true},
  content: {type: String, required: true},
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    }, 
    competences: Array,
    city : String,
    school: String,
    company : String
});

var UserModel = mongoose.model('users', userSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  UserModel.find(
    (err, users) => {
      console.log(users)
      res.json(users)
    }
  );
});
/******************** INSCRIPTION *****************************/
router.post('/signup', function(req, res, next){

  var hashedPassword = passwordHash.generate(req.body.password);

  var newUser = new UserModel({
      nom: req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      password: hashedPassword,
      competences: [],
      content: [],// un tableau d'objet content date de creation et contenu publication
      city: '',
      school: '',
      company: ''
  });
    newUser.save(
      function(err, user){
        if(err) {
          res.json(false);
        }
        else {
          res.json(user);
        }
      }
    );
  }
);
/***************************FIN INSCRIPTION***************************/


/*************************CONNEXION**********************************/
router.post('/signin', function(req, res, next) {
  
    UserModel.find(
      {email: req.body.email, password: req.body.password},
      function (err, user){
        console.log(user);
        if(!err) {
          res.json(user);
        }
        else{
          res.json('desole Mais un error se produit');
        }
      }
    );
  }
);

/********************FIN CONNEXION *************************************/

var MessageSchema = mongoose.Schema({
    conversationId: String,
    sendingUserId: String,
    sendingUsername: String,
    receivingUserId: String,
    receivingUsername: String,
    message: String,
});

var MessageModel = mongoose.model('messages', MessageSchema);


router.post('/sendmessage', function(req, res, next) {
  var newMessage = new MessageModel({
    conversationId: req.body.conversationId,
    sendingUserId: req.body.sendingUserId,
    sendingUsername: req.body.sendingUsername,
    receivingUserId: req.body.receivingUsername,
    receivingUsername: req.body.receivingUsername,
    message: req.body.message,
  })
  newMessage.save(function(error, message) {
    res.json(message);
  })
});


/****** start router search*******/
router.post('/search',
  (req, res, next) => {
    UserModel.find(
      {competences: req.search},
      (err, users) =>{
        if(err) {
          res.json(false)
        }
        else {
          res.json(users)
        }
      }
    )
  }
);

module.exports = router;
