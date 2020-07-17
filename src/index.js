import express from 'express';
import constants from './config/constants';
import './config/database';
import middlewareConfig from './config/middleware';
import apiRoutes from './modules';

const app = express();
middlewareConfig(app);
app.get('/', (req, res) => {
  res.json({
    description: "REST API for artists collaborations",
    author: "Alexander Agafonov",
    version: "0.0.1"
  });
});
apiRoutes(app);
const PORT = process.env.PORT || 3000;
let listen = app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`Server running on port: ${constants.PORT} --- Running on ${process.env.NODE_ENV} --- Make something great.!`)
  }
});