// creando dependencias
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var debug = require('debug')('DWPC-2:server');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var aboutRouter = require('./routes/about');
// CReando la instancia express
var app = express();

// configurando el motor de plantillas genera una plantilla y datos genera un html (dinamico)
debug(`🔊 Ruta actual de app: ${__dirname,'views'}`);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// se establecen los middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Crea un server de archivos estaticos 
app.use(express.static(path.join(__dirname, '..','public')));

// me ayudan enrutar algo  con un /
app.use('/', indexRouter);

// Activa "usersRouter" cuando se 
// solicita "/users"
app.use('/users', usersRouter);
app.use('/index', indexRouter);

//app.use('/author',(req, res)=>{
// res.json({mainDeveloper: "Rafael elizalde"})
//});
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
