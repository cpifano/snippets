//Import external modules:
const express = require('express');
const cors = require('cors');
const requestIp = require('request-ip');
const app = express();

//Create ip middleware:
const ipMiddleware = function(req, res, next) {
    req.clientIp = requestIp.getClientIp(req);
    console.log('Client IP: ' + req.clientIp);
    next();
};

//const use_cors = false;
let whiteList = []; //Truthy
//let whiteList = ['http://example.com:8080','https://another-example.com:443', '172.21.0.1'];

//Check if CORS is enabled or disabled:
if(Array.isArray(whiteList) && whiteList.length !== 0){

  //Set CORS Asynchronously options:
  const corsOptionsDelegate = (req, callback) => {
      let corsOptions;
      if (whiteList.indexOf(req.header('Origin')) !== -1){
          corsOptions = { origin: true };     //Reflect (enable) the requested origin in the CORS response.
      } else {
          corsOptions = { origin: false };    //Disable CORS for this request.
      }
      callback(null, corsOptions);            //Callback expects two parameters: error and options.
  }

  //Apply CORS options:
  app.use(cors(corsOptionsDelegate));
} else {
  //Enable All CORS Requests:
  app.use(cors());
}

app.get('/', ipMiddleware, (req, res) => {
    res.json({'message': 'Success', 'Client IP': req.clientIp});
});

app.listen(3001);
console.log('Express server is started.');
