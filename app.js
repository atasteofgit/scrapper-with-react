const express = require('express');
const fs = require('fs')
const app = express();
const port = process.env.port || 80085;

app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

app.listen(port, function(err) {
  if (err) {
    console.log('Disaster! Server error: '+ err)
  } else {
    console.log("You're listing to radio free scraper on port "+ port);
  }
})