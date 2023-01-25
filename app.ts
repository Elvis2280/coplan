import { NextFunction } from 'express';
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const indexRouter = require('./routes/index.js');
import userRoute from './routes/UserRoute';

const app = express();
const pro = 4000;
require('dotenv').config();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Routes API
app.use('/', indexRouter);
app.use('/user', userRoute);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: any, res: any, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://coplan_admin:${process.env.DB_KEY}@coplan.pytuhwg.mongodb.net/?retryWrites=true&w=majority`,
    );
    console.log(`Ejecutando app en el puerto ${process.env.PORT}`);
  } catch (error: any) {
    throw Error(error);
  }
});

module.exports = app;
