var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tasksRouter = require('./routes/tasks');
var authRouter = require('./routes/auth');

const authMiddleWare = require('./middleware/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// auth middleware
// app.use(authMiddleWare);

app.use('/', indexRouter);
app.use('/users', authMiddleWare, usersRouter);
app.use('/tasks', authMiddleWare, tasksRouter);
app.use('/auth', authRouter);

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


// db.sequelize.sync({alter: true}).then(() => {
//   // console.log(`Dropped tables and resynced.`);
//   console.log(`Synced.`);
// });

app.listen(8000, () => {
  console.log('Server started successfully!');
});

module.exports = app;
