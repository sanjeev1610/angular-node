var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var passport = require('passport');
var cors = require('cors');
var bodyparser = require('body-parser');


var app = express();
const dbUrl = 'mongodb+srv://sam:samsam@cluster0-ojupx.mongodb.net/angularProducts?retryWrites=true&w=majority';


//connect to mongodb 
mongoose.connect('mongodb://127.0.0.1:27017/sanitdb',{useNewUrlParser: true},(err,db)=>{
    if(err){
        console.log('error in mongo');
    }
    if(db){
        console.log('connection succeess...........');
    }
});

// mongoose.connect(dbUrl, { useNewUrlParser: true }, (err,db)=>{
//     if(err){
//         console.log('error in mongo');
//     }
//     if(db){
//         console.log('connection succeess...........');
//     }
// });

//config/passport.js
require('./config/passport');
app.use(cors(
    {
        origin: ['http://localhost:4200', 'http://127.0.0.1:4200'],
        credentials: true
    }
));
app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(bodyparser.json({limit: '10mb', extended: true}))
app.use(bodyparser.urlencoded({limit: '10mb', extended: true}))

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use('/static',express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;



