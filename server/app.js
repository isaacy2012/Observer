const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const testAPIRouter = require("./routes/testAPI");
const { MongoClient } = require('mongodb');

const app = express();


app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/testAPI", testAPIRouter);

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

//Setting up MongoDB
const uri = "mongodb+srv://dbUser:mO6XYe70n1Htw08A@cluster0.n3bdm.mongodb.net/Observer?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
c();
async function c(){
  const collection = (await client.connect()).db("Observer").collection("Messages");
  const doc = {name: "Neapolitan pizza", shape: "round"};
  const result = await collection.insertOne(doc);
  console.log(
      `A document was inserted with the _id: ${result.insertedId}`,);
  await client.close();
}
