var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');
var options = { server: { socketOptions: {connectTimeoutMS: 5000 } }};
mongoose.connect('mongodb://wanpada1:wanpada1@ds161790.mlab.com:61790/wanpada',
   options,
   function(err) {
    console.log(err);
   }
);

var userSchema = mongoose.Schema({
  nom: String,
  prenom: String,
  password: String,
  email: String,
});
var UserModel = mongoose.model('users', userSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
///////////////////// INSCRIPTION ///////////////////////////////
router.post('/signup', function(req, res, next){
  console.log(req.body)
  var newUser = new UserModel({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    password :req.body.password,
  });
  newUser.save(function(err, user){
  res.json(user);
  });

});
/////////////////////FIN INSCRIPTION///////////////////////////////


/////////////////////CONNEXION////////////////////////////////////
router.post('/signIn', function(req, res, next) {
    UserModel.find(
      {email: req.body.email, password: req.body.password},
        function (err, user){
          console.log(user);
          if(user.length > 0) {
          res.json(user);
        
    }else{
      console.log('desole Mais un error se produit');
    }
  })                   
});



///////////////FIN CONNEXION//////////////////////////////////////






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
  var newMessage = new MessageModel
    ({
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



module.exports = router;
