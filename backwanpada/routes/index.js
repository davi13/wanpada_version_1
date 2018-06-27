var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');
const CryptoJS = require('crypto-js');
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

// USER

var userSchema = mongoose.Schema({
  nom: {type: String, required: true, min: 3, max: 10},
  prenom: {type: String, required: true, min: 3, max: 10},
  password: {type: String, required: true},
  content: {type: String, required: false},
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  competences: { type: Array, required: false },
  ville : String,
  university: String,
  company : String
});

var publishSchema= mongoose.Schema({
  user_id: String,
  date: { type: Date, default: Date.now },
  nbOfLikes: Number,
  comments: [{ body: String, date: Date }],
  messages: String
})

          // MODELS IN MONGOOSE //
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

  var newUser = new UserModel({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    password: req.body.password
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
});



/*************************CONNEXION**********************************/
router.post('/signin', function(req, res, next) {
  UserModel.find(
    {email: req.body.email, password: req.body.password},
    function (err, user){
      console.log(user);
      if(err) {
        res.json(false);
      }
      else{
        res.json(user);
      }
    }
  );
});

/********************FIN CONNEXION *************************************/







// NOUVELLE publication

var publishSchema = mongoose.Schema({
  userid: String,
  date: String,
  nbOfLikes: String,
  comments: String,
  message: String
});

var PublishModel = mongoose.model('publications', publishSchema);


router.post('/newmessage', function(req, res, next) {
  var newMessage = new PublishModel({
    userid: req.body.userid,
    date: req.body.date,
    nbOfLikes: req.body.nbOfLikes,
    comments: req.body.comments,
    message: req.body.messages
  })
  newMessage.save(function(error, newMessage ) {
    console.log(newMessage);
    res.json(newMessage);
  })
});


















router.post('/update', function(req, res, next) {

  UserModel.update(
    {_id: req.body.id},
    {
     nom: req.body.nom,
     prenom: req.body.prenom,
     email: req.body.email,
     password: CryptoJS.SHA512(req.body.password).toString(),
     competences: req.body.competences,
     content: req.body.content,// un tableau d'objet content date de creation et contenu publication
     ville: req.body.ville,
     university: req.body.university,
     company: req.body.company
    },function(error, user) {
      console.log('=====================+++++++++'+error);
      console.log('=====================+++++++++'+user);
       res.json(user);
    }
  );
}
);

/*************************FIN USER UPDATE**********************************/

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




/////// ROUTES POUR PUBLICATIONS //////

router.post('/publish', function(req, res, next) {
  var newPublish = new PublishModel({
    user_id: String,
    dateOfPublishing: String,
    nbOfLikes: Number,
    comments: Array,
    message: String
  })
  newPublish.save(function(error, publication ) {
    res.json(publication);
  })
});

module.exports = router;
