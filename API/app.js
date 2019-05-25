const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const User = require('./models/users');

const userRouter = require('./routers/users');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/auth', userRouter);

module.exports = app;

// const person = new User(
//     'William',
//     'William',
//     '123123',
//     'w@stations.com',
//     '144 Peter Road',
//     false,
//   );

// console.log(person.id);
