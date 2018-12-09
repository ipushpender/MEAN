var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user,done){//when u store in session it serialise by id
    done(null,user.id);
});
passport.deserializeUser(function(id,done){//when u store in session it serialise by id
    User.findById(id,function(err,user){
        done(err,user);
    });
});

//###############################SIGNUP ############################################
passport.use('local.signup',new LocalStrategy({
    usernameField:'email',
    passwordField:'password',
    passReqToCallback:true
},
    function(req,email,password,done){
//===================validation============================================================
        req.checkBody('email','Invalid Email').notEmpty().isEmail();//validation
        req.checkBody('password','Invalid password').notEmpty().isLength({min:4});
        var errors =req.validationErrors();
        if(errors){
            var messages=[];
            errors.forEach(function(error){
                messages.push(error.msg);
            });
            return done(null,false,req.flash('error',messages));//req.flash sending to view
        
        }
//===================End validation====================================================
        User.findOne({'email':email},function(err,user){
            if(err){                
                return done(err);
            }
            if(user){
                return done(null,false,{message:'Email is already in use'});
            }
            var newUser = new User();
            newUser.email = email;
            newUser.password = newUser.encryptPassword(password);
            newUser.save(function(err,result){
                    if(err){
                        return done(err);
                    }
                    return done(null,newUser);

            });
        });

}));
//###################################END SIGNUP #######################################



//#####################################LOGIN ##########################################
passport.use('local.signin',new LocalStrategy({
    usernameField:'email',
    passwordField:'password',
    passReqToCallback:true
},function(req,email,password,done){
//===================validation============================================================
req.checkBody('email','Invalid Email').notEmpty().isEmail();//validation
req.checkBody('password','Invalid password').notEmpty();
var errors =req.validationErrors();
if(errors){
    var messages=[];
    errors.forEach(function(error){
        messages.push(error.msg);
    });
    return done(null,false,req.flash('error',messages));//req.flash sending to view

}
//=======================End validation====================================================
User.findOne({'email':email},function(err,user){
    if(err){                
        return done(err);
    }
    if(!user){
        return done(null,false,{message:'No user Found!!!'});
    }
    if(!user.validPassword(password)){
        return done(null,false,{message:'Wrong Password!!!'}); 
    }
    return done(null,user);
});

}));
//#################################################### END LOGIN ######################################    