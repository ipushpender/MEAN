var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport =require('passport');
var Product = require('../models/product');
var  csrfProtection =csrf();
router.use(csrfProtection);//all the routes should be protected by csrfProtection


//=======================for at time of page load=================================
router.get('/profile',isLoggedIn,function(req,res,next){
    res.render('user/profile');
  });
  //=======================End at time of page load=================================
//================================================LOGOUT====================================================
router.get('/logout',isLoggedIn,function(req,res,next){
    req.logout();
    res.redirect('/');
  });
  //============================================END LOGOUT====================================================
router.use('/',notLoggedIn,function(req,res,next){ //router.use is for get or post all request
   next();
  });

router.get('/signup',function(req,res,next){
    var messages =req.flash('error');
    res.render('user/signup',{csrfToken:req.csrfToken(),messages:messages,hasErrors:messages.length > 0}); 
  });
  router.post('/signup',passport.authenticate('local.signup',{
      successRedirect:'/user/profile',
      failureRedirect : '/user/signup',
      failureFlash:true     
  }));
  
  
  //=======================for at time of page load=================================
  router.get('/signin',function(req,res,next){
    var messages =req.flash('error');
    res.render('user/signin',{csrfToken:req.csrfToken(),messages:messages,hasErrors:messages.length > 0});
  });
  //=======================End at time of page load=================================
  
  
  router.post('/signin',passport.authenticate('local.signin',{
    successRedirect:'/user/profile',
    failureRedirect : '/user/signin',
    failureFlash:true   
  }));
  module.exports = router;
  

  
  //==================check whether user is logged in  or not  on each router where we call this=============
  //no one can directly reach on profile page
  function isLoggedIn(req,res,next){
      if(req.isAuthenticated()){//passport method to check login in session
        return next();
      }
      res.redirect('/');
  }
  //====================================================================================================
  
  
//=====================to check if user is not correct url ===========================================
  
//=============IT WILL NOT SHOW LOGIN PAGE AGAIN IF USER ALREADY LOGIN==================================
  function notLoggedIn(req,res,next){
    if(!req.isAuthenticated()){//passport method to check login in session
      return next();
        }
        res.redirect('/');
    }
//====================================================================================================