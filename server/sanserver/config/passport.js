var User = require('../model/user');
var passport = require('passport');
var LocalStrtegy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

passport.serializeUser((user, done)=>{
    done(null, user._id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err, user);
    });
});

passport.use('local-signup', new LocalStrtegy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done)=>{
    User.findOne({'email': email}, (err, user)=>{
        if(err) {
           return done(err);
        }
        if(user) {
            return done(null, false, {message: 'email already exists'});
        }
        
        var NewUser = new User();
        NewUser.email = email;
        NewUser.password = NewUser.encryptPwd(password);

        //save User
        NewUser.save((err, result)=>{
            if(err) {
               return done(err);
            }
            return done(null,NewUser);
        })

    })
    
}));


passport.use('local-signin', new LocalStrtegy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done)=>{
    User.findOne({email: email}, (err,user)=>{
        
    
        console.log(user)
        if(err){
            console.log("err"+err);
            return done(err);
        }
        if (!user) {
            console.log(02)
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password,user.password)) {
            console.log(03)

          return done(null, false, { message: 'Incorrect password.' });
        }
        if(user){
            console.log(04)

            return done(null, user);
        }
    })
    
    
}
));






































