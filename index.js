const mongoose = require('mongoose'),
      express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      https = require("https"),
      fs = require("fs")
      cors = require("cors");


const app = express(),
      port = 9111;
      options = {
        key: fs.readFileSync("/home/mdvy96/exploration3/encryption/server.key"),
        cert: fs.readFileSync("/home/mdvy96/exploration3/encryption/mdvy96_club.crt"),
        ca: fs.readFileSync( '/home/mdvy96/exploration3/encryption/mdvy96_club.ca-bundle' )
      };


// Cors Middleware
app.use(cors());

const users = require('./routes/users');

// Body Parser Middleware
app.use(bodyParser.json());

//
app.use('/scholars', users);

/*app.get('/', (req,res)=>{
  res.send("Invalid Endpoint");
})*/


mongoose.connect("mongodb://127.0.0.1:27017/exploration3", { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', ()=>{
  console.error.bind(console, 'connection error:')
});

db.once('open', ()=>{
  console.log("Connected Successfully to the Mongo database");
});





// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

https.createServer(options, app).listen(port, () => {
  console.log(`App running on port ${port}!`);
});
