import express from 'express';
import constants from './config/constants';
const app = express();
const PORT = process.env.PORT || 3000;
let listen = app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`Server running on port: ${constants.PORT} --- Running on ${process.env.NODE_ENV} --- Make something great.!`)
  }
});