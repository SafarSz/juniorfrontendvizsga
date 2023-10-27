var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();

// Statikus oldalak
app.use(express.static(path.join(__dirname, 'web')));

// Extra eszközök
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 404-es hiba elkapása & kezelése
app.use(function(req, res, next) {
  next(createError(404));
});

// Hibakezelő
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
