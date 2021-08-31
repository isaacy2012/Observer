const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const getItemsRouter = require('./routes/getItems');
const addItemRouter = require('./routes/addItem');
const updateItemRouter = require('./routes/updateItem');
const mongoose = require('mongoose');

const app = express();

//Connecting to MongoDB
const user = ''; // put db username here
const password = ''; // put db password here
const uri = `mongodb+srv://${user}:${password}@cluster0.n3bdm.mongodb.net/Observer?retryWrites=true&w=majority`;
mongoose.connect(uri).then(() => console.log("Connected to db"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/get-items', getItemsRouter);
app.use('/add-item', addItemRouter);
app.use('/update-item', updateItemRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
