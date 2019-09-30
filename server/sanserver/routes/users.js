var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../model/user');
var tokenFun = require('../jwt/jwt-sign');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* Post User Details i.e signup or Register */
router.post('/signup', (req,res)=>{
   addToDb(req,res);

 
})

 function addToDb(req, res){
  const email = req.body.email;
  User.findOne({'email': email}).then(user=>{
    if(user){
      res.status(401).json({'msg':'Email already Exists'});
    } else{
      const newUser = new User();
    newUser.email = email;
    newUser.password = newUser.encryptPwd(req.body.password);
    const usr =  newUser.save()
    usr.then(user=>{
      const response = {
        "user": user,
        "id": user._id
      }
      res.send(response);
    }).catch(err=>{
      res.send(err);
    })
    }
    
 }).catch(err=> {
  res.send(err);
 })
 
 }
 

 router.post('/signin',function(req,res,next){
   passport.authenticate('local-signin', (err, user, info)=>{
     console.log('1');
     if(err){
       res.send(user);
       console.log('2');
     }
     
     if(user){
       var token = tokenFun({email: user.email, password: user.password});
      console.log('3');
       res.send({'user': user, 'token': token});
     }
   })(req,res,next)
 });

 router.get('/user/:id', (req,res,next)=>{
   const id = req.params.id;
  //  res.send({msg: 'hello'});

   User.findById(id).exec().then(user => {
     if(!user){
       res.status(401).send({error: 'User doesnot exist'});
     }
     res.status(201).send(
        {
         'email': user.email
       }
      
     );
   }).catch(err=>{
     res.status(401).send({error: 'User Not exist'})
   })

 });

module.exports   = router;

