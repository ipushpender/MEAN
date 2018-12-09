var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs  = require('express-handlebars'); 
var mongoose =require('mongoose');
var session =require('express-session');
var passport =require('passport');
var flash =require('connect-flash');
var bodyParser =require('body-parser');
var MongoStore =require('connect-mongo')(session);
var indexRouter = require('./routes/index');
var validator =require('express-validator');
var userRoutes =require('./routes/user');

var app = express();
try{
mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser: true});
}
catch(err){
  console.log(err);
}
require('./config/passport'); //we dont need to bind only load
// view engine setup
app.engine('.hbs',expressHbs({defaultLayout:'layout',extname:'.hbs'}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret:'secret',
  resave:false,//save on serveron each request if true
  saveUninitialized:false,//save on server on whether not intialised
  store:new MongoStore({mongooseConnection:mongoose.connection}),//connection to db
  cookie:{maxAge:180*60*1000}//3hour expires time
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
  res.locals.login = req.isAuthenticated();//here login is global variable true or false based on login
  res.locals.session = req.session;//global varibles
  next();//for continue
});
app.use('/', indexRouter);//indexRouter should be first becoz it will run before userRoutes
app.use('/user', userRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
   res.render('error');
});

module.exports = app;
